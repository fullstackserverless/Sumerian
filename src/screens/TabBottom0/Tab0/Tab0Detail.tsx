import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useTheme, useNavigation } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer, ButtonSquare, Space } from '../../../components'
import I18n from '../../../utils'
import { ScaledSheet } from 'react-native-size-matters'
import { goBack, classicRose, onScreen, black, white } from '../../../constants'
// import { arrayWithNewId, onlyTitleInArray, sortTitle } from '../../helper'
import { View } from 'react-native'
import { useOrientation } from '../../../hooks'

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
    json: '',
    ru: ''
  }


  const { dark } = useTheme()
  const { addListener } = useNavigation()
  const [play, setPlay] = useState(true)
  const orientation = useOrientation()

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
      // const url = `https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/en.json`
      // const response = await fetch(url)
      const response = await fetch(json)
      const data = await response.json()
      //console.log('arrayWithNewId', arrayWithNewId(sortTitle(data)))
      // console.log('sortTitle(', sortTitle(data))
      //console.log(onlyTitleInArray(data))
      setData(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [navigation])

  const { container } = styles

  const orient = orientation === 'LANDSCAPE' ? false : true

  return (
    <AppContainer
      backgroundColor={dark ? black : classicRose}
      title=" "
      onPress={goBack(navigation)}
      colorLeft={white}
      color={classicRose}
      header={orient}
    >
      {play && <YouTubePlayer play={play} uri={uri} />}
      <Space height={20} />
      {json && (
        <View style={container}>
          {Platform.OS === 'ios' && (
            <ButtonSquare
              title={I18n.t('learn')}
              onPress={onScreen('TAB0_LEARN', navigation, data)}
              textColor={dark ? classicRose : white}
              borderColor={dark ? classicRose : white}
            />
          )}

          <ButtonSquare
            title={I18n.t('test')}
            onPress={onScreen('TAB0_TEST', navigation, { data, done, id })}
            textColor={dark ? classicRose : white}
            borderColor={dark ? classicRose : white}
          />
        </View>
      )}
    </AppContainer>
  )
}

export { Tab0Detail }
