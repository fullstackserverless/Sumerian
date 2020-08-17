import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer, Button, Space } from '../../../components'
import I18n from '../../../utils'
import { goBack, onScreen, white, mustard } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB2_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB2_DETAIL'>

type Tab2DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab2Detail = ({ route, navigation }: Tab2DetailT) => {
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
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={white} color={mustard}>
      <YouTubePlayer uri={uri} />
      <Space height={20} />
      {json !== '' && (
        <Button title={I18n.t('test')} onPress={onScreen('TAB2_TEST', navigation, data)} color={mustard} />
      )}
    </AppContainer>
  )
}

export { Tab2Detail }
