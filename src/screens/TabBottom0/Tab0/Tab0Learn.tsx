import React, { useState, useRef, useEffect } from 'react'
import { View, Platform } from 'react-native'
import { lang } from '../../../utils'
import Video from 'react-native-video'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { ScaledSheet, s, ms } from 'react-native-size-matters'
import { RouteProp, useTheme } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, EmojiView, Space, Txt } from '../../../components'
import { goBack, classicRose, white, black, W } from '../../../constants'
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
  },
  titleStyle: {
    color: '#fff',
    fontSize: 28,
    width: W - s(110),
    textAlign: 'center',
    paddingTop: 20
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
    url: '',
    ru: ''
  }

  const [displayName, setDisplayName] = useState<TestT>(defautState)

  const { container, titleStyle } = styles
  const { count, increment, reset } = useCounter(0)
  const { dark } = useTheme()

  useEffect(() => {
    const array = route.params
    const name: TestT[] = array[count]

    const timer = async () => {
      await delay(count === 0 ? 1000 : 2000)
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
    <AppContainer
      backgroundColor={dark ? black : classicRose}
      title={title}
      onPress={goBack(navigation)}
      colorLeft={color}
      color={dark ? classicRose : white}
      iconLeft=":back:"
    >
      <View style={[container, { height, width }]}>
        <Video ignoreSilentSwitch="ignore" ref={playerRef} source={{ uri }} audioOnly />
        {displayName.name !== '' && <EmojiView name={displayName.name} fontSize={fontSize} />}
      </View>
      {lang === 'ru' && <Txt h11 title={displayName.ru} color={color} textStyle={titleStyle} />}
      <Space height={s(20)} />
    </AppContainer>
  )
}

export { Tab0Learn }
