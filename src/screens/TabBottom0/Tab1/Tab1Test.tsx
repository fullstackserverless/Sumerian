import React, { useState, useRef, useEffect } from 'react'
import { View, Platform, Image } from 'react-native'
import { shuffle } from 'lodash'
import Video from 'react-native-video'
import I18n from 'i18n-js'
import { API, graphqlOperation } from 'aws-amplify'
import * as Progress from 'react-native-progress'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { ScaledSheet, s, ms } from 'react-native-size-matters'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList, TestT } from '../../../AppNavigator'
import { AppContainer, Txt, Space, ButtonAnswer } from '../../../components'
import { goBack, classicRose, errSoundOne, errSoundTwo, white, W, mustard } from '../../../constants'
import { useOrientation } from '../../../hooks'
import { createJavaScriptProg, updateExam, createExam } from '../../../graphql/mutations'
import { getReactNative } from '../../../graphql/queries'
import useAudio from '../../../hooks/useAudio'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB1_TEST'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB1_TEST'>

type Tab1TestT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const styles = ScaledSheet.create({
  gif: {
    height: s(200),
    width: s(200),
    alignSelf: 'center'
  }
})

const Tab1Test = ({ route, navigation }: Tab1TestT) => {
  const [bool, setBool] = useState<boolean>(true)
  const defautState = {
    id: '0',
    name: '',
    title: ' ',
    url: ''
  }
  const [loading, setLoading] = useState<boolean>(false)
  const [stop, stopRender] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [randomData, updateData] = useState<Array<TestT>>([defautState])
  const [displayName, setDisplayName] = useState<TestT>(defautState)
  const [count, setCount] = useState<number>(0)
  const [answer, setAnswer] = useState<number>(0)
  const [setPlay] = useAudio(require('../../../sounds/magicSpell.mp3'))
  const { data, done, id, checkExam, examId } = route.params
  console.log('examId', examId)

  useEffect(() => {
    const array = shuffle(data)
    setDisplayName(array[answer])
    updateData(array)
    return () => {
      setAnswer(0)
    }
  }, [navigation])

  const onPress = (title: string) => {
    if (title === displayName.answer) {
      setAnswer(answer + 1)
      setBool(true)
      if (answer + 2 > randomData.length) {
        setDisplayName(randomData[answer])
      } else {
        setDisplayName(randomData[answer + 1])
      }
    } else {
      setAnswer(0)
      setBool(false)
      setCount(count + 1)
    }
  }

  const playerRef = useRef<Video>(null)
  const err = count % 2 === 0 ? errSoundTwo : errSoundOne
  const uri = bool ? displayName.url : err

  const onPressPlay = () => {
    setBool(true)
    playerRef.current?.seek(0)
  }

  const color = Platform.OS === 'ios' ? white : classicRose

  const orientation = useOrientation()
  const bottomProgress = orientation === 'LANDSCAPE' ? s(0) : s(0)

  const back = () => {
    setAnswer(0)
    goBack(navigation)()
  }

  const length = data.length
  const progress = answer / length

  const setProgress = async () => {
    stopRender(true)
    setLoading(true)
    setPlay(true)
    try {
      done !== undefined &&
        !done &&
        (await API.graphql(graphqlOperation(createJavaScriptProg, { input: { doneId: id } })))
      if (examId) {
        await API.graphql(graphqlOperation(updateExam, { input: { id: examId, javaScript: true } }))
      } else {
        await API.graphql(graphqlOperation(createExam, { input: { javaScript: true } }))
      }
      setLoading(false)
    } catch (err) {
      console.log('err', err)
      setError(err)
      setLoading(false)
    }
  }

  const title = displayName.title

  const { gif } = styles
  return (
    <AppContainer
      title={length !== answer ? String(bool) : I18n.t('win')}
      onPress={back}
      colorLeft={color}
      color={mustard}
      iconLeft=":back:"
      //onPressRight={onPressPlay}
    >
      <View style={{ position: 'absolute', top: bottomProgress }}>
        <Progress.Bar progress={progress} width={W - s(150)} color={white} height={s(6)} />
      </View>

      {length !== answer ? (
        <>
          <Video ref={playerRef} source={{ uri }} audioOnly />
          <Txt h6 title={title} />
          <Space height={20} />
          {displayName.random &&
            shuffle(displayName.random).map((x) => <ButtonAnswer key={x} title={x} onPress={() => onPress(x)} />)}
        </>
      ) : (
        <>
          <Image style={gif} source={require('../../../assets/unicorn.gif')} />
          {!stop && setProgress()}
        </>
      )}
    </AppContainer>
  )
}

export { Tab1Test }
