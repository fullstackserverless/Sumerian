import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../AppNavigator'
import { AppContainer, YouTubePlayer } from '../../../components'
import { goBack, paleBlue } from '../../../constants'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB2_DETAIL'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB2_DETAIL'>

type Tab2DetailT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab2Detail = ({ route, navigation }: Tab2DetailT) => {
  const { uri } = route.params
  return (
    <AppContainer title=" " onPress={goBack(navigation)} colorLeft={paleBlue}>
      <YouTubePlayer uri={uri} />
    </AppContainer>
  )
}

export { Tab2Detail }
