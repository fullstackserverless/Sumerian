import React, { useEffect, useState, ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { Auth, I18n } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
//import I18n from '../../../utils'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, Txt, Sumerian } from '../../../components'
import { onScreen, white, black } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

import { useTheme } from '@react-navigation/native'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type HelloT = {
  navigation: ProfileScreenNavigationProp
}

const styles = StyleSheet.create({
  img: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 150,
    width: 150
  },
  h6: { alignSelf: 'center' }
})

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

  const { img, h6 } = styles

  return (
    <AppContainer loading={loading}>
      <Sumerian imageStyle={img} />
      <Space height={100} />
      <Button title={I18n.get('signIn')} onPress={onScreen('SIGN_IN', navigation)} color={color} />
      <Space height={10} />
      <Txt h6 title={I18n.get('or')} textStyle={h6} />
      <Space height={15} />
      <Button title={I18n.get('signUp')} onPress={onScreen('SIGN_UP', navigation)} color={color} />
    </AppContainer>
  )
}

export { Hello }
