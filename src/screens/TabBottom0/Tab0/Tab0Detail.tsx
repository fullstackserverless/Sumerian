import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer, ButtonSquare, Space } from '../../../components'
import I18n from '../../../utils'
import { ScaledSheet } from 'react-native-size-matters'
import { goBack, classicRose, onScreen, white } from '../../../constants'
import { View } from 'react-native'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_DETAIL'>

type Tab0DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
})

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

  const { container } = styles

  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={white} color={classicRose}>
      <YouTubePlayer uri={uri} />
      <Space height={20} />
      {json && (
        <View style={container}>
          <ButtonSquare
            title={I18n.t('learn')}
            onPress={onScreen('TAB0_LEARN', navigation, data)}
            color={classicRose}
          />
          <ButtonSquare title={I18n.t('test')} onPress={onScreen('TAB0_TEST', navigation, data)} color={classicRose} />
        </View>
      )}
    </AppContainer>
  )
}

export { Tab0Detail }
