import React, { useEffect, useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, Txt } from '../../../components'
import { onScreen } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'
import { DataStore } from '@aws-amplify/datastore'
import { Profile } from '../../../models'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type HelloT = {
  navigation: ProfileScreenNavigationProp
}

const Hello = ({ navigation }: HelloT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const deleteObj = async () => {
    try {
      setLoading(true)
      const obj = await DataStore.query(Profile, '7ffd536a-a0ac-4958-9021-7d2ca7116634')
      console.log('obj', obj)
      const del = await DataStore.delete(obj)
      console.log('del', del)
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    // deleteObj()

    setLoading(true)
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
    key()
  }, [])

  return (
    <AppContainer loading={loading}>
      <Space height={200} />
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} />
      <Space height={10} />
      <Txt h6 title="or" textStyle={{ alignSelf: 'center' }} />
      <Space height={15} />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
