import React, { memo } from 'react'
import { Platform, StyleProp, ViewStyle, View, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { useTheme } from '@react-navigation/native'
import { black, white, primary, secondary } from '../../constants'

const diametr = 60

const circle = {
  width: diametr,
  height: diametr,
  borderRadius: diametr / 2
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  blue: {
    ...circle,
    height: diametr + 1,
    width: diametr + 1
  },
  pink: {
    ...circle,
    top: 1,
    height: diametr + 1.4
  },
  iconBg: {
    ...circle,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    left: Platform.OS === 'ios' ? 3 : 0,
    fontSize: Platform.OS === 'ios' ? 30 : 30
  }
})

interface ButtonIconCircleT {
  name: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
  color?: string
}

const ButtonIconCircle = memo<ButtonIconCircleT>(({ name, onPress, viewStyle, color }) => {
  const { container, pink, blue, iconBg, emoji } = styles
  const { dark } = useTheme()
  const backgroundColor = dark ? black : color
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={[blue, { backgroundColor: white }]}>
        <View style={[pink, { backgroundColor: white }]}>
          <View style={[iconBg, { backgroundColor }]}>
            <Emoji name={name} style={emoji} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { ButtonIconCircle }
