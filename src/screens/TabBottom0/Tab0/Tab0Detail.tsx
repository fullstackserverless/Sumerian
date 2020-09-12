import React, { useState, useEffect } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer, ButtonSquare, Space } from '../../../components'
import I18n from '../../../utils'
import { ScaledSheet } from 'react-native-size-matters'
import { goBack, classicRose, onScreen, white } from '../../../constants'
import { View } from 'react-native'
import { onlyTitleInArray } from '../../helper'

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
  const { json, uri, done, id } = route.params
  const defautState = {
    id: '0',
    name: '',
    title: '',
    url: '',
    json: ''
  }

  const { addListener } = useNavigation()
  const [play, setPlay] = useState(true)

  useEffect(() => {
    const unsubsfocus = addListener('focus', () => {
      setPlay(true)
    })
    const unsubsblur = addListener('blur', () => {
      setPlay(false)
    })

    return () => {
      unsubsfocus()
      unsubsblur()
      setPlay(false)
    }
  }, [addListener])

  const [data, setData] = useState<Array<TestT>>([defautState])

  const fetchData = async () => {
    try {
      const url = `https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/05-Dress/data.json`
      const response = await fetch(url)
      //const response = await fetch(json)
      const data = await response.json()
      //console.log(onlyTitleInArray(data))
      setData(data)
    } catch (error) {
      //console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [navigation])

  const { container } = styles

  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={white} color={classicRose}>
      {play && <YouTubePlayer play={play} uri={uri} />}
      <Space height={20} />
      {json && (
        <View style={container}>
          <ButtonSquare
            title={I18n.t('learn')}
            onPress={onScreen('TAB0_LEARN', navigation, data)}
            color={classicRose}
          />
          <ButtonSquare
            title={I18n.t('test')}
            onPress={onScreen('TAB0_TEST', navigation, { data, done, id })}
            color={classicRose}
          />
        </View>
      )}
    </AppContainer>
  )
}

export { Tab0Detail }
