import React, { useState, useRef, useEffect } from 'react'
import { View, TouchableOpacity, Text, Platform, PermissionsAndroid } from 'react-native'
import { shuffle } from 'lodash'
import Video from 'react-native-video'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { ScaledSheet, s, ms } from 'react-native-size-matters'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'

import { AppContainer, EmojiView, Row, Space } from '../../../components'
import { goBack, classicRose, errSoundOne, errSoundTwo, white } from '../../../constants'
import { useOrientation } from '../../../hooks'
import { CookieStorage } from 'amazon-cognito-identity-js'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_TEST'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_TEST'>

type Tab0LearnT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center'
  },
  emoji: {
    alignSelf: 'center'
  }
})

function useCounter(initialCount = 0) {
  const [count, setCount] = React.useState<number>(initialCount)
  const increment = React.useCallback(() => setCount((c) => c + 1), [])
  const decrement = React.useCallback(() => setCount((c) => c - 1), [])
  const reset = React.useCallback(() => setCount(0), [])
  return { count, increment, decrement, reset }
}

const delay = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))

const Tab0Learn = ({ route, navigation }: Tab0LearnT) => {
  const [bool, setBool] = useState<boolean>(true)
  const defautState = {
    id: '0',
    name: '',
    title: ' ',
    url: ''
  }

  // const [data, updateData] = useState<Array<TestT>>([defautState])
  const [displayName, setDisplayName] = useState<TestT>(defautState)

  const { container } = styles

  const { count, increment, reset } = useCounter(0)

  useEffect(() => {
    const array = route.params
    const name: TestT[] = array[count]
    //console.log('array.length', array.length)
    const timer = async () => {
      await delay(3000)
      if (count < array.length - 1) {
        increment()
        setDisplayName(name)
      } else {
        setDisplayName(name)
        reset()
      }
    }
    timer()
  }, [count])

  const playerRef = useRef<Video>(null)

  const uri = displayName.url

  const onPressPlay = () => {
    setBool(true)
    playerRef.current?.seek(0)
  }

  const color = Platform.OS === 'ios' ? white : classicRose

  const orientation = useOrientation()
  const width = orientation === 'LANDSCAPE' ? ms(450, 0.7) : ms(300, 0.7)
  const height = orientation === 'LANDSCAPE' ? ms(150, 0.9) : s(200)
  const { title } = displayName
  const fontSize = Platform.OS === 'ios' ? s(150) : s(150)

  // const onPress = () => console.log('object')

  // const data = [
  //   {
  //     id: 1,
  //     title: ':repeat:'
  //   },
  //   {
  //     id: 2,
  //     title: ':twisted_rightwards_arrows:'
  //   }
  // ]

  // const numbers = ['one', 'two']

  // const [value, setValue] = useState({
  //   one: true,
  //   two: false
  // })

  // const _onChangeState = (number) => () => {
  //   const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})
  //   setValue({ ...defaultObject, [numbers[number - 1]]: true })
  // }

  return (
    <AppContainer
      title={title}
      onPress={goBack(navigation)}
      colorLeft={color}
      color={classicRose}
      iconLeft=":back:"
      iconRight=":loud_sound:"
      onPressRight={onPressPlay}
    >
      <View style={[container, { height, width }]}>
        <Video ref={playerRef} source={{ uri }} audioOnly />
        {displayName.name !== '' && <EmojiView name={displayName.name} fontSize={fontSize} />}
      </View>
      <Space height={s(100)} />
      {/* <Row>
        {data.map(({ id, title }) => {
          const check = value[numbers[id - 1]]
          const opacity = check ? 0.6 : 1
          return (
            <TouchableOpacity onPress={_onChangeState(id)} key={id}>
              <EmojiView name={title} fontSize={40} opacity={opacity} />
              <Space width={s(15)} />
            </TouchableOpacity>
          )
        })}
      </Row> */}
    </AppContainer>
  )
}

export { Tab0Learn }
