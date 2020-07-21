import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens' // eslint-disable-line
import { Stack0 } from './screens'
import { Tab0Main, Tab0Add, Tab0Detail } from './screens/TabBottom0/Tab0'
import { Tab1Main, Tab1Add, Tab1Detail } from './screens/TabBottom0/Tab1'
import { Tab2Main, Tab2Add, Tab2Detail } from './screens/TabBottom0/Tab2'
import { Tab3Main, Tab3Add, Tab3Detail } from './screens/TabBottom0/Tab3'
import { Tab4Main, Tab4Add, Tab4Detail } from './screens/TabBottom0/Tab4'
import {
  SignUp,
  SignUpUsername,
  SignIn,
  ConfirmSignUp,
  User,
  Forgot,
  ForgotPassSubmit,
  Hello
} from './screens/Authenticator'
import { TabBottom1, UserEdit } from './screens'
import TabNavigator from './TabNavigator'
import TopTabNavigator from './TopTabNavigator'

enableScreens()

export interface ObjT {
  id: string
  title: string
  description: string
  img: string
  uri: string
  owner?: string
}

export interface UserT {
  id: string
  firstName: string
  lastName: string
  uri: string
  email: string
}

export type RootStackParamList = {
  HELLO: undefined
  SIGN_UP: undefined
  SIGN_UP_USENAME: undefined
  SIGN_IN: undefined
  FORGOT: { email: string }
  FORGOT_PASSWORD_SUBMIT: { email: string }
  CONFIRM_SIGN_UP: { email: string; password: string }
  SIGN_UP_USERNAME: { email: string }
  USER: undefined
  Stack0: undefined
  TAB0_MAIN: undefined
  TAB0_DETAIL: ObjT
  TAB0_ADD: ObjT
  TAB1_MAIN: undefined
  TAB1_DETAIL: ObjT
  TAB1_ADD: ObjT
  TAB2_MAIN: undefined
  TAB2_DETAIL: ObjT
  TAB2_ADD: ObjT
  TAB3_MAIN: undefined
  TAB3_DETAIL: ObjT
  TAB3_ADD: ObjT
  TAB4_MAIN: undefined
  TAB4_DETAIL: ObjT
  TAB4_ADD: ObjT
  TAB_BOTTOM_1: undefined
  TAB_BOTTOM_2: undefined
  TAB_BOTTOM_3: undefined
  USER_EDIT: UserT
}

const Stack = createNativeStackNavigator()

const TabsTop = (): React.ReactElement => {
  return (
    <TopTabNavigator.Navigator initialRouteName="TabTop0">
      <TopTabNavigator.Screen name="TabTop0" component={Tab0Main} />
      <TopTabNavigator.Screen name="TabTop1" component={Tab1Main} />
      <TopTabNavigator.Screen name="TabTop2" component={Tab2Main} />
      <TopTabNavigator.Screen name="TabTop3" component={Tab3Main} />
      <TopTabNavigator.Screen name="TabTop4" component={Tab4Main} />
    </TopTabNavigator.Navigator>
  )
}

const Tab = () => {
  return (
    <>
      <TabNavigator.Navigator initialRouteName="TAB_BOTTOM_0">
        <TabNavigator.Screen name="TAB_BOTTOM_0" component={TabsTop} />
        <TabNavigator.Screen name="TAB_BOTTOM_1" component={TabBottom1} />
      </TabNavigator.Navigator>
    </>
  )
}
{
  /* <TabNavigator.Screen name="TAB_BOTTOM_1" component={TabBottom1} />
<TabNavigator.Screen name="TAB_BOTTOM_2" component={TabBottom2} /> */
}
const AppNavigator = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="HELLO"
      >
        <Stack.Screen name="MAIN" component={Tab} />
        <Stack.Screen name="HELLO" component={Hello} />
        <Stack.Screen name="SIGN_UP" component={SignUp} />
        <Stack.Screen name="SIGN_UP_USERNAME" component={SignUpUsername} />
        <Stack.Screen name="SIGN_IN" component={SignIn} />
        <Stack.Screen name="FORGOT" component={Forgot} />
        <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />
        <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />
        <Stack.Screen name="USER" component={User} />
        <Stack.Screen name="USER_EDIT" component={UserEdit} />
        <Stack.Screen name="Stack0" component={Stack0} />

        <Stack.Screen name="TAB0_MAIN" component={Tab0Main} />
        <Stack.Screen name="TAB0_DETAIL" component={Tab0Detail} />
        <Stack.Screen name="TAB0_ADD" component={Tab0Add} />

        <Stack.Screen name="TAB1_MAIN" component={Tab1Main} />
        <Stack.Screen name="TAB1_DETAIL" component={Tab1Detail} />
        <Stack.Screen name="TAB1_ADD" component={Tab1Add} />

        <Stack.Screen name="TAB2_MAIN" component={Tab2Main} />
        <Stack.Screen name="TAB2_DETAIL" component={Tab2Detail} />
        <Stack.Screen name="TAB2_ADD" component={Tab2Add} />

        <Stack.Screen name="TAB3_MAIN" component={Tab3Main} />
        <Stack.Screen name="TAB3_DETAIL" component={Tab3Detail} />
        <Stack.Screen name="TAB3_ADD" component={Tab3Add} />

        <Stack.Screen name="TAB4_MAIN" component={Tab4Main} />
        <Stack.Screen name="TAB4_DETAIL" component={Tab4Detail} />
        <Stack.Screen name="TAB4_ADD" component={Tab4Add} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default AppNavigator
