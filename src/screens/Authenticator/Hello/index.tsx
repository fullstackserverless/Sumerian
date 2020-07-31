import React, { useEffect, useState, ReactElement } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, Txt } from '../../../components'
import { onScreen, white, black } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

import { useTheme } from '@react-navigation/native'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type HelloT = {
  navigation: ProfileScreenNavigationProp
}

const Hello = ({ navigation }: HelloT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { dark } = useTheme()
  const color = dark ? white : black

  const key = async (): Promise<void> => {
    try {
      //await Keychain.resetInternetCredentials('auth')
      const credentials = await Keychain.getInternetCredentials('auth')

      if (credentials) {
        const { username, password } = credentials
        const user = await Auth.signIn(username, password)
        setLoading(false)
        user && onScreen('MAIN', navigation)()
      } else {
        setLoading(false)
      }
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    //deleteObj()

    setLoading(true)

    key()
  }, [])

  return (
    <AppContainer loading={loading}>
      <Space height={200} />
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} color={color} />
      <Space height={10} />
      <Txt h6 title="or" textStyle={{ alignSelf: 'center' }} />
      <Space height={15} />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} color={color} />
    </AppContainer>
  )
}

export { Hello }
