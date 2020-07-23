import React, { memo, useEffect, useState } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { RootStackParamList, UserT } from '../../AppNavigator'
import { AppContainer } from '../../components'
import { HeaderMaster, Button } from '../../components'
import { listProfiles } from '../../../src/graphql/queries'
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
    avatar: {
      bucket: '',
      region: '',
      key: ''
    }
  })

  const fetchData = async () => {
    const credentials = await Keychain.getInternetCredentials('auth')
    if (credentials) {
      const { username } = credentials
      const obj = await API.graphql(graphqlOperation(listProfiles))
      //DataStore.query(Profile, (c) => c.email('eq', username))
      console.log('objUser', obj)
      //obj && updateData(obj[0])
    } else {
      setLoading(false)
    }
  }

  // const deleteObj = async () => {
  //   try {
  //     setLoading(true)
  //     const obj = await DataStore.query(Profile, 'd74abf50-6576-4308-99e1-a8caffe81162')
  //     console.log('obj', obj)
  //     const del = await DataStore.delete(obj)
  //     console.log('del', del)
  //     setLoading(false)
  //   } catch (err) {
  //     setError(err)
  //   }
  // }

  useEffect(() => {
    //deleteObj()
    fetchData()
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
