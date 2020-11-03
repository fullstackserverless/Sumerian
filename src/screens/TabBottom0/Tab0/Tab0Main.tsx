import React, { useState, useEffect, ReactElement, useReducer } from 'react'
import { FlatList } from 'react-native'
import { Auth, Analytics, API, graphqlOperation } from 'aws-amplify'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { s } from 'react-native-size-matters'
import { RouteProp, useTheme } from '@react-navigation/native'
import {
  AppContainer,
  ButtonSquare,
  Row,
  Space,
  Header,
  Card,
  ProgressBar,
  ModalMinimalVersion
} from '../../../components'
import I18n from '../../../utils'
import CheckBox from 'react-native-animated-checkbox'
import { goBack, onScreen, classicRose, black, white } from '../../../constants'
import { RootStackParamList, ObjT, ProgT } from '../../../AppNavigator'
import { listEnglishs, listEnglishProgs, listExams, listMinimalVersions } from '../../../graphql/queries'
import {
  onCreateEnglish,
  onCreateEnglishProg,
  onUpdateEnglish,
  onDeleteEnglish,
  onCreateExam,
  onUpdateExam
} from '../../../graphql/subscriptions'
import { uniqBy } from 'lodash'
import { ActionT, StateT, compareCreatedAt, fetchExam, arrayWithNewId, onlyTitleInArray, sortTitle } from '../../helper'
import { build } from '../../../../package.json'

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
  ],
  prog: [
    {
      id: '0',
      doneId: '0'
    }
  ],
  exam: []
}

const Tab0Main = ({ navigation }: Tab0MainT): ReactElement => {
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
  const [admin, setAdmin] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [test, setTest] = useState({})
 
  const [downloadApp, setDownloadApp] = useState<boolean>(false)
  const { dark } = useTheme()

  const getMinimalVersion = async (): Promise<void> => {
    try {
      const ver = await API.graphql(graphqlOperation(listMinimalVersions))
      const minimalVersion = ver.data.listMinimalVersions.items[0].build
      setDownloadApp(minimalVersion > build)
    } catch (err) {
      Analytics.record({
        name: 'Tab0Main - getMinimalVersion',
        attributes: err
      })
    }
  }

  const fetchData = async (): Promise<void> => {
    try {
      const owner = Auth.user.attributes.sub
      const filterQuery = {
        filter: {
          owner: {
            eq: owner
          }
        },
        limit: 99
      }

      const arr = await API.graphql(graphqlOperation(listEnglishs, { limit: 100 }))
      const arrProg = await API.graphql(graphqlOperation(listEnglishProgs, filterQuery))
      const arrExam = await API.graphql(graphqlOperation(listExams, filterQuery))
      const data = arr.data.listEnglishs.items
      const prog = arrProg.data.listEnglishProgs.items
      const exam = arrExam.data.listExams.items
      dispatch({ type: 'READ', data, prog, exam })
      setLoading(false)
    } catch (err) {
      Analytics.record({
        name: 'Tab0Main - fetchData',
        attributes: err
      })
      setLoading(false)
    }
  }


  useEffect(() => {
    setLoading(true)
    let isSubscribed: boolean = true // eslint-disable-lin
    getMinimalVersion()
    fetchData()
    //console.log('arrayWithNewId', arrayWithNewId(sortTitle('https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/en.json')))
    fetchExam('https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/en.json').then((x) => setTest(x))
    const check = Auth.user.signInUserSession.idToken.payload['cognito:groups']
    const adm =
      check !== undefined ? Auth.user.signInUserSession.idToken.payload['cognito:groups'][0] === 'Admin' : false
    setAdmin(adm)

    const subscriptionCreate = API.graphql(graphqlOperation(onCreateEnglish)).subscribe({
      next: (data: any) => dispatch({ type: 'CREATE', data: data.value.data.onCreateEnglish })
    })
    const subscriptionCreateProgress = API.graphql(graphqlOperation(onCreateEnglishProg)).subscribe({
      next: () => fetchData()
    })
    const subscriptionCreateExam = API.graphql(graphqlOperation(onCreateExam)).subscribe({
      next: () => fetchData()
    })
    const subscriptionUpdateExam = API.graphql(graphqlOperation(onUpdateExam)).subscribe({
      next: () => fetchData()
    })
    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateEnglish)).subscribe({
      next: (data: any) => dispatch({ type: 'UPDATE', data: data.value.data.onUpdateEnglish })
    })
    const subscriptionDelete = API.graphql(graphqlOperation(onDeleteEnglish)).subscribe({
      next: (data: any) => dispatch({ type: 'DELETE', data: data.value.data.onDeleteEnglish })
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
          onPress={onScreen('TAB0_DETAIL', navigation, { ...item, done, id })}
          onPressAdmin={onScreen('TAB0_ADD', navigation, item)}
        />
        <Space height={s(10)} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()

  const checkExam = exam.length === 0 ? false : exam[0].english
  const examId = exam.length === 0 ? false : exam[0].id
  const percent = (prog.length / data.length).toFixed(2)


  return (
    <AppContainer
      backgroundColor={dark ? white : classicRose}
      onPress={goBack(navigation)}
      loading={loading}
      flatList
      color={classicRose}
    >
      <FlatList
        scrollEventThrottle={16}
        data={data.sort(compareCreatedAt)}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <>
            <Row>
              <ProgressBar color={dark ? classicRose : white} progress={Number(percent)} />
              <ButtonSquare
                title={I18n.t('exam')}
                onPress={onScreen('TAB0_TEST', navigation, { data: test, examId })}
                textColor={dark ? classicRose : white}
                borderColor={dark ? black : classicRose}
              />
              <CheckBox checked={checkExam} color={dark ? classicRose : white} iconSize={s(25)} />
            </Row>
            {admin && (
              <Header onPressRight={onScreen('TAB0_ADD', navigation)} iconRight={admin ? ':heavy_plus_sign:' : null} />
            )}
            <ModalMinimalVersion visible={downloadApp} />
          </>
        }
      />
    </AppContainer>
  )
}

export { Tab0Main }
