/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
///* eslint-disable */
import React, { useEffect, ReactElement } from 'react'
import { StatusBar, Platform } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import SplashScreen from 'react-native-splash-screen'
import { NetworkCheckingModal } from './components'
import { ThemeProvider, DarkTheme, LightTheme } from './theme'
import AppNavigator from './AppNavigator'
import awsconfig from '../aws-exports'
import { white, black } from './constants'

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory: any = {}

class MyStorage {
  static syncPromise = null

  static setItem(key: string, value: string) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key: string) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key: string) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

const App = (): ReactElement => {
  //const [value] = useState(false)
  const scheme = useColorScheme()
  const theme = scheme === 'dark' ? DarkTheme : LightTheme
  const color = scheme === 'dark' ? 'light' : 'dark'
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <StatusBar backgroundColor={scheme === 'dark' ? black : white} barStyle={`${color}-content`} />
      <NetworkCheckingModal />
      <AppearanceProvider>
        <ThemeProvider theme={theme}>
          <AppNavigator />
        </ThemeProvider>
      </AppearanceProvider>
    </>
  )
}

//window.LOG_LEVEL = 'DEBUG'

export default App
