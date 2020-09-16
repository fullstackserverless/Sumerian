import React, { useEffect, useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import { ScaledSheet, ms } from 'react-native-size-matters'
import * as Keychain from 'react-native-keychain'
import I18n from '../../../utils'
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

const styles = ScaledSheet.create({
  img: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: ms(150, 0.5),
    width: ms(150, 0.5)
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
      console.log('err', err)
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    key()
  }, [])

  const { img, h6 } = styles

  return (
    <AppContainer backgroundColor={dark ? black : white} loading={loading}>
      <Sumerian imageStyle={img} />

      <Space height={100} />
      <Button title={I18n.t('signIn')} onPress={onScreen('SIGN_IN', navigation)} color={color} />
      <Space height={10} />
      <Txt h6 title={I18n.t('or')} textStyle={h6} />
      <Space height={15} />
      <Button title={I18n.t('signUp')} onPress={onScreen('SIGN_UP', navigation)} color={color} />
    </AppContainer>
  )
}

export { Hello }
