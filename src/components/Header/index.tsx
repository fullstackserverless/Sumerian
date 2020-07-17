import React, { memo } from 'react'
import { Platform, TouchableOpacity, View, StyleSheet, GestureResponderEvent } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { primary, secondary, W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: W,
    paddingBottom: 20
  },
  iconLeftStyle: {
    fontSize: 35,
    left: Platform.OS === 'ios' ? 0 : 25
  },
  rightIconStyle: {
    fontSize: 37,
    marginRight: 20
  }
})

interface HeaderT {
  admin?: boolean
  title?: string
  iconLeft?: string
  iconRight?: string
  colorLeft?: string
  colorRight?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  onPressRight?: ((event: GestureResponderEvent) => void) | undefined
}

const Header = memo<HeaderT>(({ admin = false, iconLeft, iconRight, colorLeft, colorRight, onPress, onPressRight }) => {
  const { container, iconLeftStyle, rightIconStyle } = styles
  const { dark } = useTheme()
  const color = dark ? primary : secondary
  const x = isIphoneX() ? 30 : 30
  const paddingTop = admin ? 0 : x

  return (
    <View style={container}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress}>
          <Fontisto name={iconLeft} style={[iconLeftStyle, { paddingTop }]} color={colorLeft ? colorLeft : color} />
        </TouchableOpacity>
      )}

      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Fontisto name={iconRight} style={[rightIconStyle, { paddingTop }]} color={colorRight ? colorRight : color} />
        </TouchableOpacity>
      )}
    </View>
  )
})

export { Header }
