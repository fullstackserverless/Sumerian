import React, { memo, useEffect, useState } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { listProfiles } from '../../../src/graphql/queries'
import { RootStackParamList, UserT } from '../../AppNavigator'
import { AppContainer, HeaderMaster, Button } from '../../components'
import { useTheme } from '@react-navigation/native'
import { goHome, onScreen, white, black } from '../../constants'
import { onUpdateProfile } from '../../graphql/subscriptions'
import { UpdateProfileInput } from '../../API'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB_BOTTOM_1'>

type TabBottom1T = {
  navigation: ProfileScreenNavigationProp
}

const TabBottom1 = memo(({ navigation }: TabBottom1T) => {
  const [loading, setLoading] = useState<boolean>(true)
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
      const obj = await API.graphql(
        graphqlOperation(listProfiles, {
          filter: {
            email: {
              eq: username
            }
          }
        })
      )
      // @ts-expect-error
      obj && updateData(obj.data.listProfiles.items[0])
      obj && setLoading(false)
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    let isSubscribed: boolean = true // eslint-disable-line
    // @ts-expect-error
    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateProfile)).subscribe({
      next: (obj: any) => updateData(obj.value.data.onUpdateProfile)
    })
    return () => {
      subscriptionUpdate.unsubscribe()
      isSubscribed = false
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

  const { dark } = useTheme()
  const color = dark ? white : black

  return (
    <AppContainer loading={loading} message={error}>
      <HeaderMaster user={data} onPress={onScreen('USER_EDIT', navigation, data)} loading={loading} />
      <Button title="Sign Out" onPress={_onPress} color={color} />
    </AppContainer>
  )
})

export { TabBottom1 }
