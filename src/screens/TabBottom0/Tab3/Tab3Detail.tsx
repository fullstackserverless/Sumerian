import React from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer } from '../../../components'
import { goBack, trueBlue } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB3_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB3_DETAIL'>

type Tab3DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab3Detail = ({ route, navigation }: Tab3DetailT) => {
  const { uri } = route.params
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={trueBlue}>
      <YouTubePlayer uri={uri} />
    </AppContainer>
  )
}

export { Tab3Detail }
