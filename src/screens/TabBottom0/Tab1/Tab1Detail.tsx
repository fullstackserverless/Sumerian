import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useTheme } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer, ButtonSquare, Space } from '../../../components'
import I18n from '../../../utils'
import { goBack, onScreen, white, mustard, black } from '../../../constants'
import { onlyTitleInArray } from '../../helper'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB1_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB1_DETAIL'>

type Tab1DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab1Detail = ({ route, navigation }: Tab1DetailT) => {
  const { json, uri } = route.params
  const { dark } = useTheme()
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
      onlyTitleInArray(data)
      setData(data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [navigation])

  //useExitOnBack()
  return (
    <AppContainer
      backgroundColor={dark ? black : mustard}
      title=" "
      onPress={goBack(navigation)}
      colorLeft={white}
      color={mustard}
    >
      <YouTubePlayer uri={uri} />
      <Space height={20} />
      {json !== '' && (
        <ButtonSquare
          title={I18n.t('test')}
          onPress={onScreen('TAB1_TEST', navigation, data)}
          textColor={dark ? mustard : black}
          borderColor={dark ? mustard : black}
        />
      )}
    </AppContainer>
  )
}

export { Tab1Detail }
