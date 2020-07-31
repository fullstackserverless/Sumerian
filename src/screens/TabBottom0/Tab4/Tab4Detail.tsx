import React from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer } from '../../../components'
import { goBack, fuchsia } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB4_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB4_DETAIL'>

type Tab4DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab4Detail = ({ route, navigation }: Tab4DetailT) => {
  const { uri } = route.params
  return (
    <AppContainer title="Confirmation" onPress={goBack(navigation)} colorLeft={fuchsia}>
      <YouTubePlayer uri={uri} />
    </AppContainer>
  )
}

export { Tab4Detail }
