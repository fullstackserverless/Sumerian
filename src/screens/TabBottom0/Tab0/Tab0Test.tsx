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
import { AppContainer, Txt, ButtonIcon } from '../../../components'
import { goBack, classicRose, errSoundOne, errSoundTwo, white, W } from '../../../constants'
import { useOrientation } from '../../../hooks'
import { createEnglishProg } from '../../../graphql/mutations'

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
    position: 'absolute',
    bottom: s(-10)
  },
  gif: {
    height: s(200),
    width: s(200),
    alignSelf: 'center'
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
  const [loading, setLoading] = useState<boolean>(false)
  const [stop, stopRender] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [randomData, updateData] = useState<Array<TestT>>([defautState])
  const [displayName, setDisplayName] = useState<TestT>(defautState)
  const [count, setCount] = useState<number>(0)
  const [answer, setAnswer] = useState<number>(0)

  const { container, display, sub, gif } = styles

  const [data, done, id] = route.params

  const shake = () => {
    const shuff = shuffle(data)
    const sliceArray = shuff.splice(0, 9)
    let random
    random = shuffle(sliceArray)[0]
    if (random === displayName) {
      random = shuffle(sliceArray)[1]
    }
    return { random, sliceArray }
  }

  useEffect(() => {
    const { random, sliceArray } = shake()
    setDisplayName(random)
    updateData(sliceArray)
    return () => {
      setAnswer(0)
    }
  }, [navigation])

  const onPress = (title: string) => {
    const { random, sliceArray } = shake()
    if (title === displayName.title) {
      setAnswer(answer + 1)
      setBool(true)
      updateData(sliceArray)
      setDisplayName(random)
    } else {
      setAnswer(0)
      setBool(false)
      setCount(count + 1)
      updateData(shuffle(randomData))
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
  const width = orientation === 'LANDSCAPE' ? ms(450, 0.7) : ms(300, 0.7)
  const height = orientation === 'LANDSCAPE' ? ms(150, 0.9) : s(200)
  const bottom = orientation === 'LANDSCAPE' ? ms(155, 0.7) : s(190)
  const bottomProgress = orientation === 'LANDSCAPE' ? s(10) : s(30)
  const bottomContainer = orientation === 'LANDSCAPE' ? ms(-65, 0.5) : ms(-130, 0.4)

  const back = () => {
    setAnswer(0)
    goBack(navigation)()
  }

  const length = data.length
  const progress = answer / length
  const setProgress = async () => {
    stopRender(true)
    setLoading(true)
    try {
      !done && (await API.graphql(graphqlOperation(createEnglishProg, { input: { doneId: id } })))
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }
  const title = displayName.title.length > 1 ? displayName.title : 'Alphabet'

  // const compare = (a, b) => {
  //   if (a.title < b.title) {
  //     return -1
  //   }
  //   if (a.title > b.title) {
  //     return 1
  //   }
  //   return 0
  // }

  // console.log('data', data.sort(compare))
  return (
    <AppContainer
      title={length !== answer ? title : I18n.t('win')}
      onPress={back}
      colorLeft={color}
      color={classicRose}
      iconLeft=":back:"
      iconRight=":loud_sound:"
      onPressRight={onPressPlay}
    >
      <View style={{ bottom: bottomProgress }}>
        <Progress.Bar progress={progress} width={W - s(150)} color={white} height={s(6)} />
      </View>

      <View style={[container, { height, width, bottom: bottomContainer }]}>
        {length !== answer ? (
          <>
            <Video ref={playerRef} source={{ uri }} audioOnly />
            <View style={sub}>
              {randomData.map(({ id, name, title }) => (
                <ButtonIcon key={id} name={name} onPress={() => onPress(title)} color={classicRose} />
              ))}
            </View>
          </>
        ) : (
          <>
            <Image style={gif} source={require('../../../assets/unicorn.gif')} />
            {!stop && setProgress()}
          </>
        )}
      </View>
      <Txt error title={String(bool)} textStyle={[display, { bottom, color: bool ? 'green' : 'red' }]} />
    </AppContainer>
  )
}

export { Tab0Test }

// const permissions = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
//         title: 'title',
//         message: 'message',
//         buttonPositive: 'OK'
//       })
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       } else {
//         return
//       }
//     } catch (err) {
//       return
//     }
//   }
// }
