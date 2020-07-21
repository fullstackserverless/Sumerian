import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer } from '../../../components'
import { goBack, mustard } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB1_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB1_DETAIL'>

type Tab1DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab1Detail = ({ route, navigation }: Tab1DetailT) => {
  const { uri } = route.params
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={mustard}>
      <YouTubePlayer uri={uri} />
    </AppContainer>
  )
}

export { Tab1Detail }
