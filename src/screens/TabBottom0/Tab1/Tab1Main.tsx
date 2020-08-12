import React, { useState, useEffect, ReactElement, useReducer } from 'react'
import { FlatList } from 'react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { AppContainer, Space, Header, Card } from '../../../components'
import { uniqBy } from 'lodash'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { goBack, onScreen, mustard, white } from '../../../constants'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { listJavaScripts } from '../../../graphql/queries'
import { onCreateEnglish, onUpdateEnglish, onDeleteEnglish } from '../../../graphql/subscriptions'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_MAIN'>

type Tab0MainT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ItemT {
  item: ObjT
}

const initialState = {
  data: [
    {
      id: '0',
      title: 'Alphabet',
      description: 'Learning the basics of the English language.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
      uri: 'LLTxI1jyo-4',
      json: ''
    }
  ]
}

interface ActionT {
  type: string
  data: ObjT
}
interface StateT {
  type: string
  data: ObjT
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

const Tab1Main = ({ navigation }: Tab0MainT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    try {
      const arr = await API.graphql(graphqlOperation(listJavaScripts))
      // @ts-expect-error
      dispatch({ type: 'READ', data: arr.data.listJavaScripts.items })
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
    const subscriptionCreate = API.graphql(graphqlOperation(onCreateEnglish)).subscribe({
      next: (data: any) => dispatch({ type: 'CREATE', data: data.value.data.onCreateEnglish })
    })
    // @ts-expect-error
    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateEnglish)).subscribe({
      next: (data: any) => dispatch({ type: 'UPDATE', data: data.value.data.onUpdateEnglish })
    })
    // @ts-expect-error
    const subscriptionDelete = API.graphql(graphqlOperation(onDeleteEnglish)).subscribe({
      next: (data: any) => dispatch({ type: 'DELETE', data: data.value.data.onDeleteEnglish })
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
          onPress={onScreen('TAB0_DETAIL', navigation, item)}
          onPressAdmin={onScreen('TAB0_ADD', navigation, item)}
        />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} flatList message={error} color={mustard}>
      <FlatList
        scrollEventThrottle={16}
        data={state.data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <Header
            onPressRight={onScreen('TAB0_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight={admin ? 'plus-a' : null}
            colorLeft="transparent"
            admin={admin}
            colorRight={white}
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { Tab1Main }
