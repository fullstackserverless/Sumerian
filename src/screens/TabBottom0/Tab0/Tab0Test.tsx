import React, { useState, useRef, useEffect } from 'react'
import { View, Dimensions, Platform, PermissionsAndroid } from 'react-native'
import { shuffle } from 'lodash'
import Video from 'react-native-video'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { ScaledSheet, s, ms } from 'react-native-size-matters'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'

import { AppContainer, Txt, Space, ButtonIcon, ButtonIconCircle } from '../../../components'
import { goBack, classicRose, errSoundOne, errSoundTwo, white, isPortrait, W } from '../../../constants'
import { useOrientation } from '../../../hooks'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_TEST'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_TEST'>

type Tab0TestT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center'
    //paddingHorizontal: s(10)
  },
  display: {},
  sub: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: s(-10)
  }
})

const Tab0Test = ({ route, navigation }: Tab0TestT) => {
  const [bool, setBool] = useState<boolean>(true)
  const defautState = {
    id: '0',
    name: '',
    title: ' ',
    url: ''
  }

  const [randomData, updateData] = useState<Array<TestT>>([defautState])
  const [displayName, setDisplayName] = useState<TestT>(defautState)
  const [count, setCount] = useState<number>(0)

  const { container, display, sub } = styles

  const shake = () => {
    const shuff = shuffle(route.params)
    const sliceArray = shuff.splice(0, 9)
    let random
    random = shuffle(sliceArray)[0]
    if (random === displayName) {
      random = shuffle(sliceArray)[1]
    }
    return { random, sliceArray }
  }

  const permissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
          title: 'title',
          message: 'message',
          buttonPositive: 'OK'
        })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
          return
        }
      } catch (err) {
        return
      }
    }
  }

  useEffect(() => {
    permissions()
    const { random, sliceArray } = shake()
    setDisplayName(random)
    updateData(sliceArray)
  }, [navigation])

  const onPress = (title: string) => {
    const { random, sliceArray } = shake()
    if (title === displayName.title) {
      setBool(true)
      updateData(sliceArray)
      setDisplayName(random)
    } else {
      setBool(false)
      setCount(count + 1)
      updateData(shuffle(randomData))
    }
  }

  const playerRef = useRef<Video>(null)
  const error = count % 2 === 0 ? errSoundTwo : errSoundOne
  const uri = bool ? displayName.url : error

  const onPressPlay = () => {
    setBool(true)
    playerRef.current?.seek(0)
  }

  const color = Platform.OS === 'ios' ? white : classicRose

  const orientation = useOrientation()
  const width = orientation === 'LANDSCAPE' ? ms(450, 0.7) : ms(300, 0.7)
  const height = orientation === 'LANDSCAPE' ? ms(150, 0.9) : s(200)
  const bottom = orientation === 'LANDSCAPE' ? s(-30) : s(-50)
  return (
    <AppContainer
      title={displayName.title}
      onPress={goBack(navigation)}
      colorLeft={color}
      color={classicRose}
      iconLeft=":back:"
      iconRight=":loud_sound:"
      onPressRight={onPressPlay}
    >
      <View style={[container, { height, width }]}>
        <Video ref={playerRef} source={{ uri }} audioOnly />
        <View style={sub}>
          {randomData.map(({ id, name, title }) => (
            <ButtonIcon key={id} name={name} onPress={() => onPress(title)} color={classicRose} />
          ))}
        </View>
      </View>
      <Txt error title={String(bool)} textStyle={[display, { bottom, color: bool ? 'green' : 'red' }]} />
    </AppContainer>
  )
}

export { Tab0Test }
