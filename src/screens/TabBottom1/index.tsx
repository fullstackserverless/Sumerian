import React, { memo, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { DataStore } from '@aws-amplify/datastore'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { RootStackParamList, UserT } from '../../AppNavigator'
import { AppContainer } from '../../components'
import { HeaderMaster, Button } from '../../components'
import { Profile } from '../../models'
import { goHome, onScreen } from '../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB_BOTTOM_1'>

type TabBottom1T = {
  navigation: ProfileScreenNavigationProp
}

const TabBottom1 = memo(({ navigation }: TabBottom1T) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [data, updateData] = useState<UserT>({
    id: '0',
    firstName: '',
    lastName: '',
    email: '',
    uri: ''
  })

  const fetchData = async () => {
    const credentials = await Keychain.getInternetCredentials('auth')
    if (credentials) {
      const { username } = credentials
      const obj = await DataStore.query(Profile, (c) => c.email('eq', username))
      obj && updateData(obj[0])
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const subscription = DataStore.observe(Profile).subscribe(() => fetchData())
    return () => {
      subscription.unsubscribe()
    }
  }, [navigation])

  const _onPress = async (): Promise<void> => {
    setLoading(true)
    try {
      await Auth.signOut()
      await Keychain.resetInternetCredentials('auth')
      goHome(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AppContainer loading={loading} message={error}>
      <HeaderMaster user={data} onPress={onScreen('USER_EDIT', navigation, data)} />
      <Button title="Sign Out" onPress={_onPress} />
    </AppContainer>
  )
})

export { TabBottom1 }
