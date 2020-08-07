import React, { useState, ReactElement } from 'react'
import { Auth, I18n } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Space, Button, Input, TextError } from '../../../components'
import { onScreen, goBack, white, black } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'
import { useTheme } from '@react-navigation/native'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_UP'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

const SignUp = ({ navigation }: SignUpT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string; passwordConfirmation: string }): Promise<void> => {
    const { email, password, passwordConfirmation } = values
    if (password !== passwordConfirmation) {
      setError(I18n.get('passwordsDoNotMatch'))
    } else {
      setLoading(true)
      setError('')
      try {
        const user = await Auth.signUp(email, password)
        await Keychain.setInternetCredentials('auth', email, password)
        user && onScreen('CONFIRM_SIGN_UP', navigation, { email, password })()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        if (err.code === 'UserNotConfirmedException') {
          setError(I18n.get('accountNotVerifiedYet'))
        } else if (err.code === 'PasswordResetRequiredException') {
          setError(I18n.get('resetYourPassword'))
        } else if (err.code === 'UsernameExistsException') {
          setError(I18n.get('usernameExistsException'))
        } else if (err.code === 'NotAuthorizedException') {
          setError(I18n.get('forgotPassword'))
        } else if (err.code === 'UserNotFoundException') {
          setError(I18n.get('userDoesNotExist'))
        } else {
          setError(err.code)
        }
      }
    }
  }

  const { dark } = useTheme()
  const color = dark ? white : black

  return (
    <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading} colorLeft={color}>
      <Formik
        initialValues={{
          email: 'reactnativeinitru@gmail.com',
          password: 'qwerty123',
          passwordConfirmation: 'qwerty123'
        }}
        onSubmit={(values): Promise<void> => _onPress(values)}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().min(6).required(),
          passwordConfirmation: Yup.string().min(6).required()
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
          <>
            <Input
              name="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={(): void => setFieldTouched('email')}
              placeholder="E-mail"
              touched={touched}
              errors={errors}
              autoCapitalize="none"
              color={color}
            />
            <Input
              name="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={(): void => setFieldTouched('password')}
              placeholder={I18n.get('password')}
              touched={touched}
              errors={errors}
              secureTextEntry
              color={color}
            />
            <Input
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={(): void => setFieldTouched('passwordConfirmation')}
              placeholder={I18n.get('passwordConfirmation')}
              touched={touched}
              errors={errors}
              secureTextEntry
              color={color}
            />
            <Space height={30} />
            {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
            <Space height={20} />
            <Button title={I18n.get('signUp')} onPress={handleSubmit} color={color} />
            <Space height={50} />
          </>
        )}
      </Formik>
    </AppContainer>
  )
}

export { SignUp }
