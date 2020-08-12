import React, { useState, useRef, useEffect } from 'react'
import { View, Platform, PermissionsAndroid } from 'react-native'
import { shuffle } from 'lodash'
import Video from 'react-native-video'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'

import { AppContainer, Txt, Space, ButtonIcon, ButtonIconCircle } from '../../../components'
import { goBack, classicRose, errSoundOne, errSoundTwo, white } from '../../../constants'
//import { useExitOnBack } from '../../../hooks'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_TEST'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_TEST'>

type Tab0TestT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: scale(215),
    paddingHorizontal: 10
  },
  display: {
    alignSelf: 'center'
  }
})

const Tab0Test = ({ route, navigation }: Tab0TestT) => {
  const [bool, setBool] = useState<boolean>(true)
  const defautState = {
    id: '0',
    name: '',
    title: '',
    url: ''
  }

  const [randomData, updateData] = useState<Array<TestT>>([defautState])
  const [displayName, setDisplayName] = useState<TestT>(defautState)
  const [count, setCount] = useState<number>(0)

  const { container, display } = styles

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
  //useExitOnBack()
  const color = Platform.OS === 'ios' ? white : classicRose
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={color} color={classicRose}>
      <View>
        <Video ref={playerRef} source={{ uri }} audioOnly />
        {displayName.title.length > 1 && <Txt h0 title={displayName.title} textStyle={display} color={white} />}
        <Space height={50} />
        <View style={container}>
          {randomData.map(({ id, name, title }) => (
            <ButtonIcon key={id} name={name} onPress={() => onPress(title)} color={classicRose} />
          ))}
        </View>
        <Space height={20} />
        <Txt error title={String(bool)} textStyle={[display, { color: bool ? 'green' : 'red' }]} />
        <Space height={20} />
        <ButtonIconCircle name=":sound:" onPress={onPressPlay} color={classicRose} />
      </View>
    </AppContainer>
  )
}

export { Tab0Test }
