import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { BackHandler } from 'react-native'

function UseExitOnBack() {
  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        BackHandler.exitApp()
        return true
      }
      BackHandler.addEventListener('hardwareBackPress', handleBackPress)
      return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
    }, [])
  )
}

export { UseExitOnBack }
