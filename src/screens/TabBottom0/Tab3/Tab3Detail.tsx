import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer, Button, Space } from '../../../components'
import I18n from '../../../utils'
import { goBack, onScreen, white, trueBlue } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB3_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB3_DETAIL'>

type Tab3DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab3Detail = ({ route, navigation }: Tab3DetailT) => {
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
    if (json) {
      const response = await fetch(json)
      const data = await response.json()
      setData(data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [navigation])

  //useExitOnBack()
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={white} color={trueBlue}>
      <YouTubePlayer uri={uri} />
      <Space height={20} />
      {json !== '' && (
        <Button title={I18n.t('test')} onPress={onScreen('TAB3_TEST', navigation, data)} color={trueBlue} />
      )}
    </AppContainer>
  )
}

export { Tab3Detail }
