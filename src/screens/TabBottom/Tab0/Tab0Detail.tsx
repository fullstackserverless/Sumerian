import React from 'react'
import { Platform } from 'react-native'
import { AppContainer, Space, Header } from '../../../components'
import { goBack, classicRose } from '../../../constants'

const Tab0Detail = ({ route, navigation }) => {
  return (
    <AppContainer>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" colorLeft={classicRose} />

      <Space height={Platform.OS === 'ios' ? 100 : 30} />
    </AppContainer>
  )
}

export { Tab0Detail }
