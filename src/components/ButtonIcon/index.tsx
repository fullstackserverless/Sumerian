import React, { memo } from 'react'
import { Platform, StyleProp, ViewStyle, View, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { useTheme } from '@react-navigation/native'
import { black, white, primary, secondary } from '../../constants'
import { Txt } from '../Txt'

const diameter = 100

const circle = {
  width: diameter,
  height: diameter,
  borderRadius: diameter / 2
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  blue: {
    ...circle,
    height: diameter,
    width: diameter
  },
  pink: {
    ...circle,
    top: 1,
    height: diameter
  },
  iconBg: {
    ...circle,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    left: Platform.OS === 'ios' ? 1 : 0,
    fontSize: Platform.OS === 'ios' ? 55 : 16
  }
})

interface ButtonIconT {
  name: string
  color: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
}

const ButtonIcon = memo<ButtonIconT>(({ name, onPress, viewStyle, color }) => {
  const { container, pink, blue, iconBg, emoji } = styles
  const { dark } = useTheme()
  const backgroundColor = dark ? black : color
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={[blue, { backgroundColor: white }]}>
        <View style={[pink, { backgroundColor: white }]}>
          <View style={[iconBg, { backgroundColor }]}>
            {name.length > 1 ? <Emoji name={name} style={emoji} /> : <Txt h0 title={name} color={white} />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { ButtonIcon }
