import React, { useState, ReactElement, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import ImagePicker from 'react-native-image-crop-picker'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Profile } from '../../../models'
import { AppContainer, Avatar, Space, Button, Input, TextError } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_UP_USERNAME'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'SIGN_UP_USERNAME'>

type SignUpUsernameT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ObjT {
  firstName: string
  lastName: string
  uri: string
  email: string
  owner: string
}

const SignUpUsername = ({ route, navigation }: SignUpUsernameT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [uri, setUri] = useState<string>('')

  const createObj = async (values: ObjT) => {
    setLoading(true)
    try {
      const obj = await DataStore.save(new Profile({ ...values }))
      console.log('obj', obj)
      //obj && onScreen('MAIN', navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  const _onPress = async (values: { firstName: string; lastName: string }): Promise<void> => {
    if (uri === '') {
      setError('Pick a face')
    } else {
      const { firstName, lastName } = values
      const { email } = route.params
      const owner = await Auth.currentAuthenticatedUser()
      //console.log('owner', owner)
      //createObj({ firstName, lastName, uri, email, owner: owner.username })
    }
  }

  const pickSingleBase64 = (cropit: boolean) => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: cropit,
      includeBase64: true,
      includeExif: true
    })
      .then((image) => {
        setUri(`data:${image.mime};base64, ${image.data}`)
        setError('')
      })
      .catch((e) => setError(e))
  }

  return (
    <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading} message={error}>
      <Avatar size="xLarge" uri={uri} onPress={() => pickSingleBase64(false)} />
      <Space height={30} />
      <Formik
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
