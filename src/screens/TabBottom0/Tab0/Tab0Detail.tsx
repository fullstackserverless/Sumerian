import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { I18n } from 'aws-amplify'
import { AppContainer, YouTubePlayer, Button, Space, UseExitOnBack } from '../../../components'
import { goBack, classicRose, onScreen, white } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_DETAIL'>

type Tab0DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab0Detail = ({ route, navigation }: Tab0DetailT) => {
  const { json, uri } = route.params
  const defautState = {
    id: '0',
    name: '',
    title: '',
    url: '',
    json: ''
  }

  const [data, setData] = useState<Array<TestT>>([defautState])

  const fetchData = async () => {
    const response = await fetch(json)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [navigation])

  UseExitOnBack()
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={white} color={classicRose}>
      <YouTubePlayer uri={uri} />
      <Space height={70} />
      <Button title={I18n.get('test')} onPress={onScreen('TAB0_TEST', navigation, data)} color={classicRose} />
    </AppContainer>
  )
}

export { Tab0Detail }
