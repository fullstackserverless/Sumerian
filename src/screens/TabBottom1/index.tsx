import React, { memo, useEffect, useState, useReducer } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import I18n from '../../utils'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { listProfiles } from '../../../src/graphql/queries'
import { RootStackParamList, UserT } from '../../AppNavigator'
import { AppContainer, HeaderMaster, Button, Space, Tab, Row, Txt } from '../../components'
import { useTheme } from '@react-navigation/native'
import { goHome, onScreen, white, black } from '../../constants'
import { onUpdateProfile } from '../../graphql/subscriptions'
import { ActionT, StateT } from '../helper'
import { listExams } from '../../graphql/queries'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB_BOTTOM_1'>

type TabBottom1T = {
  navigation: ProfileScreenNavigationProp
}

const initialState = {
  exam: []
}

const TabBottom1 = memo(({ navigation }: TabBottom1T) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  
  const reducer = (state: StateT, action: ActionT) => {
    switch (action.type) {
      case 'READ':
        return {
          exam: action.exam
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

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
    const owner = Auth.user.attributes.sub
    const filterQuery = {
        filter: {
          owner: {
            eq: owner
          }
        },
        limit: 99
    }

    const arrExam = await API.graphql(graphqlOperation(listExams, filterQuery))
    const exam = arrExam.data.listExams.items

    dispatch({ type: 'READ', exam })

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
    // const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateProfile)).subscribe({
    //   next: (obj: any) => updateData(obj.value.data.onUpdateProfile)
    // })
    // return () => {
    //   subscriptionUpdate.unsubscribe()
    //   isSubscribed = false
    // }
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

  const { exam } = state
  const checkEn = exam.length === 0 ? false : exam[0].english
  const checkJs = exam.length === 0 ? false : exam[0].javaScript
  const checkRn = exam.length === 0 ? false : exam[0].reactNative
  const checkTs = exam.length === 0 ? false : exam[0].typeScript
  const checkAWS = exam.length === 0 ? false : exam[0].amplify

  return (
    <AppContainer backgroundColor={dark ? black : white} loading={loading} message={error}>
      <HeaderMaster user={data} onPress={onScreen('USER_EDIT', navigation, data)} loading={loading} />
      <Space height={50} />
      <Txt h7 title="Badges:" />
      <Space height={10} />

      <Row>
        <Tab title={checkEn ? `TabTop${0}${dark ? 'B' : 'W'}` : `TabTop0Disable`} />
        <Tab title={checkJs ? `TabTop${1}${dark ? 'B' : 'W'}` : `TabTop1Disable`} />
        <Tab title={checkRn ? `TabTop${2}${dark ? 'B' : 'W'}` : `TabTop2Disable`} />
        <Tab title={checkTs ? `TabTop${3}${dark ? 'B' : 'W'}` : `TabTop3Disable`} />
        <Tab title={checkAWS ? `TabTop${4}${dark ? 'B' : 'W'}` : `TabTop4Disable`} />
      </Row>

      <Space height={400} />
      <Button title={I18n.t('signOut')} onPress={_onPress} color={color} />
    </AppContainer>
  )
})

export { TabBottom1 }
