import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { W, white, black } from '../../constants'
import { Txt } from '../Txt'

const styles = ScaledSheet.create({
  container: {
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: scale(30)
  },
  h: {
    width: W - (Platform.OS === 'ios' ? scale(120) : scale(100)),
    paddingTop: Platform.OS === 'ios' ? scale(15) : scale(5),
    paddingBottom: scale(12),
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

interface ButtonT {
  title: string
  color?: string
  cancel?: boolean
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const Button = memo<ButtonT>(({ title, onPress, textStyle, color = white }) => {
  const { container, h } = styles
  const borderColor = white
  const { dark } = useTheme()
  const backgroundColor = dark ? black : color
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[container, { backgroundColor, borderColor }]}>
        <Txt h0 textStyle={[h, textStyle]} title={title} color={white} />
      </View>
    </TouchableOpacity>
  )
})

export { Button }
