import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'

import { AppContainer, YouTubePlayer, Button, Space } from '../../../components'
import { goBack, classicRose, onScreen, white } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_DETAIL'>

type Tab0DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab0Detail = ({ route, navigation }: Tab0DetailT) => {
  const { uri } = route.params
  const defautState = {
    id: '0',
    name: '',
    title: '',
    url: ''
  }

  const [data, setData] = useState<Array<TestT>>([defautState])

  const url = 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/00-Alphabet/data.json'

  const fetchData = async () => {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    fetchData()
  }, [navigation])

  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={white} color={classicRose}>
      <YouTubePlayer uri={uri} />
      <Space height={70} />
      <Button title="Test" onPress={onScreen('TAB0_TEST', navigation, data)} color={classicRose} />
    </AppContainer>
  )
}

export { Tab0Detail }
