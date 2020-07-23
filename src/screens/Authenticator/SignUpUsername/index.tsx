import React, { useState, ReactElement, useRef } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { createProfile } from '../../../graphql/mutations'
import { AppContainer, Avatar, Space, Button, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList, S3ObjectT, UserT } from '../../../AppNavigator'
import config from '../../../../aws-exports'
import { pickAva, createImage } from '../../../screens/helper'

const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = config

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_UP_USERNAME'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'SIGN_UP_USERNAME'>

type SignUpUsernameT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const SignUpUsername = ({ route, navigation }: SignUpUsernameT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const formikRef = useRef<FormikProps<any>>()
  const [avatar, setAvatar] = useState<S3ObjectT>({
    bucket: '',
    region: '',
    key: ''
  })

  const createObj = async (values: UserT) => {
    setLoading(true)
    try {
      const obj = await API.graphql(graphqlOperation(createProfile, { input: values }))
      console.log('obj', obj)
      obj && onScreen('MAIN', navigation)()
      setLoading(false)
    } catch (err) {
      console.log('err', err)
      //setError(err.message)
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
      // @ts-expect-error
      createObj({ firstName, lastName, email, owner: owner.username, avatar: fileForUpload })
      setLoading(false)
    }
  }

  const onPressAva = async () => {
    const ava = await pickAva()
    const image = await createImage(ava)
    console.log('image', image)
    setAvatar(image)
  }

  return (
    <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading} message={error}>
      <Avatar size="xLarge" avatar={avatar} onPress={onPressAva} />
      <Space height={30} />
      <Formik
        innerRef={(r) => (formikRef.current = r || undefined)}
        initialValues={{ firstName: 'Play', lastName: 'Ra' }}
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
            <Button title="Sign Up" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppContainer>
  )
}

export { SignUpUsername }
