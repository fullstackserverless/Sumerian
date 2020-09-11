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
import { goBack, classicRose, white } from '../../../constants'
import { useOrientation } from '../../../hooks'

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
  const defautState = {
    id: '0',
    name: '',
    title: ' ',
    url: ''
  }

  const [displayName, setDisplayName] = useState<TestT>(defautState)
  const { container } = styles
  const { count, increment, reset } = useCounter(0)

  useEffect(() => {
    const array = route.params
    const name: TestT[] = array[count]

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

  const color = Platform.OS === 'ios' ? white : classicRose

  const orientation = useOrientation()
  const width = orientation === 'LANDSCAPE' ? ms(450, 0.7) : ms(300, 0.7)
  const height = orientation === 'LANDSCAPE' ? ms(150, 0.9) : s(200)
  const { title } = displayName
  const fontSize = Platform.OS === 'ios' ? s(150) : s(120)

  return (
    <AppContainer title={title} onPress={goBack(navigation)} colorLeft={color} color={classicRose} iconLeft=":back:">
      <View style={[container, { height, width }]}>
        <Video ref={playerRef} source={{ uri }} audioOnly />
        {displayName.name !== '' && <EmojiView name={displayName.name} fontSize={fontSize} />}
      </View>
      <Space height={s(100)} />
    </AppContainer>
  )
}

export { Tab0Learn }
