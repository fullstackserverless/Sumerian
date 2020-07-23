import React, { useState, ReactElement, useRef, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Profile } from '../../models'
import { AppContainer, Avatar, Space, Button, Input } from '../../components'
import { goBack } from '../../constants'
import { RootStackParamList, S3ObjectT, UserT } from '../../AppNavigator'
import config from '../../../aws-exports'
import { updateImage, pickAva } from '../../screens/helper'
const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = config

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'USER_EDIT'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'USER_EDIT'>

type UserEditT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const UserEdit = ({ route, navigation }: UserEditT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const formikRef = useRef<FormikProps<any>>()
  const [avatar, setAvatar] = useState<S3ObjectT>({
    bucket: '',
    region: '',
    key: ''
  })
  console.log('avatar', avatar)
  const [input, setObj] = useState<UserT>({
    id: '0',
    firstName: '',
    lastName: '',
    email: '',
    avatar
  })

  useEffect(() => {
    setLoading(true)
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setObj(obj)
      // @ts-expect-error
      const { setFieldValue } = formikRef.current
      const { id, firstName, lastName, email } = obj
      setFieldValue('id', id)
      setFieldValue('firstName', firstName)
      setFieldValue('lastName', lastName)
      setFieldValue('email', email)
      setAvatar(obj.avatar)
      setLoading(false)
    }
  }, [route.params])
  console.log('input', input)
  const updateObj = async ({ id, firstName, lastName, email }: UserT) => {
    try {
      setLoading(true)
      const original = await DataStore.query(Profile, id)
      console.log('original', original)
      const update = await DataStore.save(
        Profile.copyOf(original, (updated) => {
          updated.firstName = firstName
          updated.lastName = lastName
          updated.email = email
          updated.avatar = avatar
        })
      )
      console.log('update', update)
      update && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  const _onPress = async (values: { firstName: string; lastName: string }): Promise<void> => {
    setLoading(true)
    if (avatar.key === '') {
      setError('Pick a face')
      setLoading(false)
    } else {
      const { firstName, lastName } = values
      const { email } = route.params
      const owner = await Auth.currentAuthenticatedUser()
      const key = avatar.key
      const fileForUpload = {
        bucket,
        key,
        region
      }
      updateObj({ id: input.id, firstName, lastName, email, owner: owner.username, avatar: fileForUpload })
      setLoading(false)
    }
  }

  const onPressAva = async () => {
    const ava = await pickAva()
    const image = await updateImage(avatar.key, ava)
    setAvatar(image)
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title=" " loading={loading}>
        <Avatar size="xLarge" avatar={avatar} onPress={onPressAva} />
        <Space height={30} />
        <Formik
          innerRef={(r) => (formikRef.current = r || undefined)}
          initialValues={input}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().min(2).required(),
            lastName: Yup.string().min(2).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Input
                name="firstName"
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={(): void => setFieldTouched('firstName')}
                placeholder="First name"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="lastName"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={(): void => setFieldTouched('lastName')}
                placeholder="Last name"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Space height={30} />
              <Button title="Done" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { UserEdit }
