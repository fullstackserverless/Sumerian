import React, { useState, useEffect, ReactElement, useReducer } from 'react'
import { FlatList } from 'react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { s } from 'react-native-size-matters'
import { RouteProp } from '@react-navigation/native'
import { AppContainer, ButtonSquare, Row, Space, Header, Card, ProgressBar } from '../../../components'
import I18n from '../../../utils'
import CheckBox from 'react-native-animated-checkbox'
import { goBack, onScreen, mustard, white, black } from '../../../constants'
import { RootStackParamList, ObjT, ProgT } from '../../../AppNavigator'
import { listJavaScripts, listExams, listJavaScriptProgs } from '../../../graphql/queries'
import {
  onCreateJavaScript,
  onUpdateJavaScript,
  onDeleteJavaScript,
  onCreateJavaScriptProg,
  onCreateExam,
  onUpdateExam
} from '../../../graphql/subscriptions'
import { clamp, uniqBy } from 'lodash'
import { ActionT, StateT, compareCreatedAt, fetchExam } from '../../helper'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB1_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB1_MAIN'>

type Tab1MainT = {
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
      title: 'Data types',
      description: 'Learning the basics of the Java Script language.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/JSForKids/00-DataTypes/DataTypes.png',
      uri: 'OifJhMwsC8Q',
      json: ''
    }
  ],
  prog: [
    {
      id: '0',
      doneId: '0'
    }
  ],
  exam: []
}

const Tab1Main = ({ navigation }: Tab1MainT): ReactElement => {
  const reducer = (state: StateT, action: ActionT) => {
    switch (action.type) {
      case 'CREATE':
        return {
          data: uniqBy([action.data, ...state.data], 'id')
        }
      case 'READ':
        return {
          data: action.data,
          prog: action.prog,
          exam: action.exam
        }
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

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [test, setTest] = useState({})

  const fetchData = async () => {
    try {
      const owner = Auth.user.attributes.sub
      const filterQuery = {
        filter: {
          owner: {
            eq: owner
          }
        },
        limit: 50
      }

      const arr = await API.graphql(graphqlOperation(listJavaScripts, { limit: 100 }))
      const data = arr.data.listJavaScripts.items
      const arrProg = await API.graphql(graphqlOperation(listJavaScriptProgs, filterQuery))
      const prog = arrProg.data.listJavaScriptProgs.items
      const arrExam = await API.graphql(graphqlOperation(listExams, filterQuery))
      const exam = arrExam && arrExam.data.listExams.items
      dispatch({ type: 'READ', data, prog, exam })
      setLoading(false)
    } catch (err) {
      setError(err)
      console.log('err', err)
      setLoading(false)
    }
  }

  useEffect(() => {
    let isSubscribed: boolean = true // eslint-disable-line

    setLoading(true)
    fetchData()
    fetchExam('https://s3.eu-central-1.wasabisys.com/ghashtag/JSForKids/forTest/test.json').then((x) => setTest(x))
    const check = Auth.user.signInUserSession.idToken.payload['cognito:groups']
    const adm =
      check !== undefined ? Auth.user.signInUserSession.idToken.payload['cognito:groups'][0] === 'Admin' : false
    setAdmin(adm)

    const subscriptionCreate = API.graphql(graphqlOperation(onCreateJavaScript)).subscribe({
      next: (data: any) => dispatch({ type: 'CREATE', data: data.value.data.onCreateJavaScript })
    })
    const subscriptionCreateProgress = API.graphql(graphqlOperation(onCreateJavaScriptProg)).subscribe({
      next: () => fetchData()
    })
    const subscriptionCreateExam = API.graphql(graphqlOperation(onCreateExam)).subscribe({
      next: () => fetchData()
    })
    const subscriptionUpdateExam = API.graphql(graphqlOperation(onUpdateExam)).subscribe({
      next: () => fetchData()
    })
    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateJavaScript)).subscribe({
      next: (data: any) => dispatch({ type: 'UPDATE', data: data.value.data.onUpdateJavaScript })
    })
    const subscriptionDelete = API.graphql(graphqlOperation(onDeleteJavaScript)).subscribe({
      next: (data: any) => dispatch({ type: 'DELETE', data: data.value.data.onDeleteJavaScript })
    })
    return () => {
      subscriptionCreate.unsubscribe()
      subscriptionUpdate.unsubscribe()
      subscriptionDelete.unsubscribe()
      subscriptionCreateProgress.unsubscribe()
      subscriptionCreateExam.unsubscribe()
      subscriptionUpdateExam.unsubscribe()
      isSubscribed = false
    }
  }, [navigation])

  const { data, prog, exam } = state

  const _renderItem = ({ item }: ItemT) => {
    const search = prog.filter((x: ProgT) => x.doneId === item.id)
    const done = search.length != 0
    const id = item.id
    return (
      <>
        <Card
          admin={admin}
          item={item}
          done={done}
          onPress={onScreen('TAB1_DETAIL', navigation, { ...item, done, id })}
          onPressAdmin={onScreen('TAB1_ADD', navigation, item)}
        />
        <Space height={s(10)} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()
  console.log('exam', exam)
  const checkExam = exam.length === 0 ? false : exam[0].javaScript
  const examId = exam.length === 0 ? false : exam[0].id

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} flatList color={mustard}>
      <FlatList
        scrollEventThrottle={16}
        data={data.sort(compareCreatedAt)}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <>
            <Row>
              <ProgressBar progress={prog.length / data.length} color={black} />
              <ButtonSquare
                title={I18n.t('exam')}
                onPress={onScreen('TAB1_TEST', navigation, { data: test, checkExam, examId })}
                color={mustard}
                textColor={black}
                borderColor={mustard}
              />
              <CheckBox checked={checkExam} color={'green'} />
            </Row>
            {admin && (
              <Header onPressRight={onScreen('TAB1_ADD', navigation)} iconRight={admin ? ':heavy_plus_sign:' : null} />
            )}
          </>
        }
      />
    </AppContainer>
  )
}

export { Tab1Main }
