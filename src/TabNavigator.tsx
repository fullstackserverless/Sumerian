import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme, useNavigationBuilder, createNavigatorFactory } from '@react-navigation/native'
import { TabRouter, TabActions } from '@react-navigation/routers'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Tab } from './components'
import { black, white } from './constants'

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    ...ifIphoneX(
      {
        height: 80
      },
      {
        height: 50
      }
    )
  },
  sub: { flex: 1 }
})

interface TabNavigatorT {
  initialRouteName: string
  children?: React.ReactNode
  screenOptions: object
  tabBarStyle: object
  contentStyle: object
}

const TabNavigator = ({ initialRouteName, children, screenOptions, tabBarStyle, contentStyle }: TabNavigatorT) => {
  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName
  })

  const { index, routes } = state

  const { dark } = useTheme()

  const { container, sub } = styles

  return (
    <>
      <View style={[sub, contentStyle]}>{descriptors[routes[index].key].render()}</View>
      <View style={[{ backgroundColor: dark ? black : white }, container, tabBarStyle]}>
        {routes.map(({ name, key }) => {
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
              <Tab
                title={`TAB_BOTTOM_${index}` === name ? `TAB_BOTTOM_${index}` : `${name}_DISABLE`}
                imageStyle={{ alignSelf: 'flex-end' }}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </>
  )
}

export default createNavigatorFactory(TabNavigator)()
