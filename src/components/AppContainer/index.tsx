import React, { memo } from 'react'
import { StyleSheet, View, ScrollView, GestureResponderEvent } from 'react-native'
// @ts-expect-error
import StatusBarAlert from 'react-native-statusbar-alert'
import { useTheme } from '@react-navigation/native'
import { Header } from '../Header'
import { Space } from '../Space'
import { Spin } from '../Spin'
import { black, white } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const RED = '#FC2847'

interface AppContainerT {
  admin?: boolean
  flatList?: boolean
  iconLeft?: string
  color?: string
  colorLeft?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  onPressRight?: (event: GestureResponderEvent) => void | undefined
  iconRight?: string
  colorRight?: string
  children?: React.ReactNode
  message?: string
  title?: string
  loading?: boolean
}

const AppContainer = memo<AppContainerT>(
  ({
    admin = false,
    flatList = false,
    iconLeft = ':back:',
    color = white,
    onPress = null,
    onPressRight = null,
    iconRight,
    children,
    message = '',
    title,
    loading = false
  }) => {
    const { container, sub } = styles
    const { dark } = useTheme()
    const backgroundColor = dark ? black : color

    return (
      <View style={[container, { backgroundColor }]}>
        <StatusBarAlert
          visible={message !== ''}
          message={message}
          backgroundColor={RED}
          color="white"
          pulse="background"
          height={40}
          style={{ padding: 5, paddingTop: 5 }}
        />
        {title && (
          <Header
            title={title}
            onPress={onPress}
            onPressRight={onPressRight}
            iconLeft={iconLeft}
            iconRight={iconRight}
            admin={admin}
          />
        )}
        <>
          {loading ? (
            <Spin />
          ) : (
            <>
              {!flatList ? (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={sub}>{children}</View>
                  <Space height={60} />
                </ScrollView>
              ) : (
                <View style={sub}>{children}</View>
              )}
            </>
          )}
        </>
      </View>
    )
  }
)

export { AppContainer }
