import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme, useNavigationBuilder, createNavigatorFactory } from '@react-navigation/native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { TabRouter, TabActions } from '@react-navigation/routers'
import { Tab } from './components'
import { black, white } from './constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingBottom: 10,
    paddingVertical: 5,
    shadowColor: 'black',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    flexDirection: 'row',
    ...ifIphoneX(
      {
        height: 95
      },
      {
        height: 70
      }
    )
  },
  sub: { flex: 1 }
})

interface TopTabNavigatorT {
  initialRouteName: string
  children?: React.ReactNode
  screenOptions: object
  tabBarStyle: object
  contentStyle: object
}

const TopTabNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle
}: TopTabNavigatorT) => {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName
  })

  const { index } = state

  const { dark } = useTheme()

  const { container, sub } = styles

  return (
    <>
      <View style={[{ backgroundColor: dark ? black : white }, container, tabBarStyle]}>
        {state.routes.map(({ name, key }) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: key
                })

                if (!event.defaultPrevented) {
                  navigation.dispatch({
                    ...TabActions.jumpTo(name),
                    target: state.key
                  })
                }
              }}
            >
              <Tab title={`TabTop${index}` === name ? `TabTop${index}${dark ? 'B' : 'W'}` : `${name}Disable`} />
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={[sub, contentStyle]}>{descriptors[state.routes[state.index].key].render()}</View>
    </>
  )
}

export default createNavigatorFactory(TopTabNavigator)()
