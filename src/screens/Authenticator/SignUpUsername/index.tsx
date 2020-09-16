import React, { useState, ReactElement, useRef } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import I18n from '../../../utils'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useTheme } from '@react-navigation/native'

import { createProfile } from '../../../graphql/mutations'
import { AppContainer, Space, Button, Input } from '../../../components'
import { onScreen, goBack, white, black } from '../../../constants'
import { RootStackParamList, S3ObjectT, UserT } from '../../../AppNavigator'
import config from '../../../../aws-exports'
//import { pickAva, createImage } from '../../../screens/helper'

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
      //console.log('obj', obj)
      obj && onScreen('MAIN', navigation)()
      setLoading(false)
    } catch (err) {
      setError(err.message)
    }
  }

  const _onPress = async (values: { firstName: string; lastName: string }): Promise<void> => {
    setLoading(true)
    // if (avatar.key === '') {
    //   setError('Pick a face')
    //   setLoading(false)
    // } else {
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
    //}
  }

  // const onPressAva = async () => {
  //   setLoading(true)
  //   const ava = await pickAva()
  //   const image = await createImage(ava)
  //   setAvatar(image)
  //   setLoading(false)
  // }

  const { dark } = useTheme()
  const color = dark ? white : black

  return (
    <AppContainer backgroundColor={dark ? black : white} onPress={goBack(navigation)} title=" " colorLeft={color}>
      <Space height={30} />
      <Formik
        innerRef={(r) => (formikRef.current = r || undefined)}
        initialValues={{ firstName: '', lastName: '' }}
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
              placeholder={I18n.t('firstName')}
              touched={touched}
              errors={errors}
              autoCapitalize="none"
              color={color}
            />
            <Input
              name="lastName"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={(): void => setFieldTouched('lastName')}
              placeholder={I18n.t('lastName')}
              touched={touched}
              errors={errors}
              autoCapitalize="none"
              color={color}
            />
            <Space height={30} />
            <Button title={I18n.t('signUp')} onPress={handleSubmit} color={color} />
            <Space height={50} />
          </>
        )}
      </Formik>
    </AppContainer>
  )
}
//<Avatar size="xLarge" avatar={avatar} onPress={onPressAva} loading={loading} />

export { SignUpUsername }
