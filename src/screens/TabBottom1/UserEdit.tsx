import React, { useState, ReactElement, useRef, useEffect } from 'react'
import ImagePicker from 'react-native-image-crop-picker'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Profile } from '../../models'
import { AppContainer, Avatar, Space, Button, Input } from '../../components'
import { goBack } from '../../constants'
import { RootStackParamList, UserT } from '../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'USER_EDIT'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'USER_EDIT'>

type UserEditT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const UserEdit = ({ route, navigation }: UserEditT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [uri, setUri] = useState<string>('')
  const formikRef = useRef()

  const [input, setObj] = useState({
    id: '0',
    firstName: '',
    lastName: '',
    email: '',
    uri: ''
  })

  useEffect(() => {
    setLoading(true)
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setObj(obj)
      const { setFieldValue } = formikRef.current
      const { id, firstName, lastName, email, uri } = obj
      setFieldValue('id', id)
      setFieldValue('firstName', firstName)
      setFieldValue('lastName', lastName)
      setFieldValue('email', email)
      setFieldValue('uri', uri)
      setUri(uri)
      setLoading(false)
    }
  }, [route.params])

  const updateObj = async ({ id, firstName, lastName, email, uri }: UserT) => {
    try {
      setLoading(true)
      const original = await DataStore.query(Profile, id)
      const update = await DataStore.save(
        Profile.copyOf(original, (updated) => {
          updated.firstName = firstName
          updated.lastName = lastName
          updated.email = email
          updated.uri = uri
        })
      )
      update && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
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
    <>
      <AppContainer onPress={goBack(navigation)} title=" " loading={loading} message={error}>
        <Avatar size="xLarge" uri={uri} onPress={() => pickSingleBase64(false)} />
        <Space height={30} />
        <Formik
          innerRef={formikRef}
          initialValues={input}
          onSubmit={(values): Promise<void> => updateObj(values)}
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
    </>
  )
}

export { UserEdit }
