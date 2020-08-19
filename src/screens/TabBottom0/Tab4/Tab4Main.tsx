import React, { useState, useEffect, ReactElement, useReducer } from 'react'
import { FlatList } from 'react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { AppContainer, Space, Header, Card } from '../../../components'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { goBack, onScreen, white, fuchsia } from '../../../constants'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { listAmplifys } from '../../../graphql/queries'
import { onCreateAmplify, onDeleteAmplify, onUpdateAmplify } from '../../../graphql/subscriptions'
import { uniqBy } from 'lodash'
import { ActionT, StateT } from '../../helper'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB4_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB4_MAIN'>

type Tab4MainT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ItemT {
  item: ObjT
}

const reducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case 'CREATE':
      return {
        data: uniqBy([action.data, ...state.data], 'id')
      }
    case 'READ':
      return { data: action.data }
    case 'UPDATE':
      return {
        ...state,
        data: uniqBy([action.data, ...state.data], 'id')
      }
    case 'DELETE':
      return {
        ...state,
        data: [...state.data].filter(({ id }) => id !== action.data.id)
      }
  }
}

const initialState = {
  data: [
    {
      id: '0',
      title: 'Data types',
      description: 'Learning the basics of the AWS Amplify.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/JSForKids/00',
      uri: 'OifJhMwsC8Q',
      json: ''
    }
  ]
}

const Tab4Main = ({ navigation }: Tab4MainT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    try {
      const arr = await API.graphql(graphqlOperation(listAmplifys))
      // @ts-expect-error
      dispatch({ type: 'READ', data: arr.data.listAmplifys.items })
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    let isSubscribed: boolean = true // eslint-disable-line
    setLoading(true)
    // @ts-expect-error
    const check = Auth.user.signInUserSession.idToken.payload['cognito:groups']
    const adm =
      // @ts-expect-error
      check !== undefined ? Auth.user.signInUserSession.idToken.payload['cognito:groups'][0] === 'Admin' : false
    setAdmin(adm)
    fetchData()

    // @ts-expect-error
    const subscriptionCreate = API.graphql(graphqlOperation(onCreateAmplify)).subscribe({
      next: (data: any) => dispatch({ type: 'CREATE', data: data.value.data.onCreateAmplify })
    })
    // @ts-expect-error
    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateAmplify)).subscribe({
      next: (data: any) => dispatch({ type: 'UPDATE', data: data.value.data.onUpdateAmplify })
    })
    // @ts-expect-error
    const subscriptionDelete = API.graphql(graphqlOperation(onDeleteAmplify)).subscribe({
      next: (data: any) => dispatch({ type: 'DELETE', data: data.value.data.onDeleteAmplify })
    })

    return () => {
      subscriptionCreate.unsubscribe()
      subscriptionUpdate.unsubscribe()
      subscriptionDelete.unsubscribe()
      isSubscribed = false
    }
  }, [navigation])

  const _renderItem = ({ item }: ItemT) => {
    return (
      <>
        <Card
          admin={admin}
          item={item}
          onPress={onScreen('TAB4_DETAIL', navigation, item)}
          onPressAdmin={onScreen('TAB4_ADD', navigation, item)}
        />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} flatList color={white}>
      <FlatList
        scrollEventThrottle={16}
        data={state.data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <Header
            onPressRight={onScreen('TAB0_ADD', navigation)}
            iconRight={admin ? ':heavy_plus_sign:' : null}
            admin={admin}
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { Tab4Main }
