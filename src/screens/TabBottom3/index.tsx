import React, { memo, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../AppNavigator'
import { Txt } from '../../components'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB_BOTTOM_3'>

type TabBottom3T = {
  navigation: ProfileScreenNavigationProp
}

const TabBottom3 = memo(({ navigation }: TabBottom3T) => {
  return (
    <>
      <Txt h1 title="Hello world" />
    </>
  )
})

export { TabBottom3 }
