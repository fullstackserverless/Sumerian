import React from 'react'
import VideoPlayer from 'react-native-video-controls'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../AppNavigator'
import { AppContainer, Space, Header } from '../../../components'
import { goBack, classicRose } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_DETAIL'>

type ConfirTab0DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab0Detail = ({ route, navigation }: ConfirTab0DetailT) => {
  const { uri } = route.params
  return (
    <>
      <VideoPlayer
        source={{ uri }}
        navigator={navigation}
        seekColor={classicRose}
        videoStyle={{ backgroundColor: '#f2bae3' }}
        repeat
      />
    </>
  )
}

export { Tab0Detail }
