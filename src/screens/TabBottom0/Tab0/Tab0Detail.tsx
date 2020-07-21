import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../AppNavigator'

import { AppContainer, YouTubePlayer } from '../../../components'
import { goBack, classicRose } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_DETAIL'>

type Tab0DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab0Detail = ({ route, navigation }: Tab0DetailT) => {
  const { uri } = route.params
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={classicRose}>
      <YouTubePlayer uri={uri} />
    </AppContainer>
  )
}

export { Tab0Detail }
