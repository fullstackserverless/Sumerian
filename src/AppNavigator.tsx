import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens' // eslint-disable-line
import { Stack0 } from './screens'
import { Tab0, Tab1, Tab2, Tab3, Tab4 } from './screens/TabBottom'
import { SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit, Hello } from './screens/Authenticator'
import TopTabNavigator from './TopTabNavigator'

enableScreens()

export type RootStackParamList = {
  HELLO: undefined
  SIGN_UP: undefined
  SIGN_IN: undefined
  FORGOT: { email: string }
  FORGOT_PASSWORD_SUBMIT: { email: string }
  CONFIRM_SIGN_UP: { email: string; password: string }
  USER: undefined
  Stack0: undefined
  Stack2: undefined
}

const Stack = createNativeStackNavigator()

const Tab = (): React.ReactElement => {
  return (
    <TopTabNavigator.Navigator initialRouteName="TabTop2">
      <TopTabNavigator.Screen name="TabTop0" component={Tab0} />
      <TopTabNavigator.Screen name="TabTop1" component={Tab1} />
      <TopTabNavigator.Screen name="TabTop2" component={Tab2} />
      <TopTabNavigator.Screen name="TabTop3" component={Tab3} />
      <TopTabNavigator.Screen name="TabTop4" component={Tab4} />
    </TopTabNavigator.Navigator>
  )
}

const AppNavigator = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Stack0"
      >
        <Stack.Screen name="MAIN" component={Tab} />
        <Stack.Screen name="HELLO" component={Hello} />
        <Stack.Screen name="SIGN_UP" component={SignUp} />
        <Stack.Screen name="SIGN_IN" component={SignIn} />
        <Stack.Screen name="FORGOT" component={Forgot} />
        <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />
        <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />
        <Stack.Screen name="USER" component={User} />
        <Stack.Screen name="Stack0" component={Stack0} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default AppNavigator
