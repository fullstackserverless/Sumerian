import React, { memo, useEffect, useState } from 'react'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../AppNavigator'
import { Txt } from '../../components'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB_BOTTOM_2'>

type TabBottom2T = {
  navigation: ProfileScreenNavigationProp
}

const TabBottom2 = memo(({ navigation }: TabBottom2T) => {
  return (
    <>
      <Txt h1 title="Hello world" />
    </>
  )
})

export { TabBottom2 }
