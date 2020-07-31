import React, { memo } from 'react'
import { Platform, StyleSheet, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { W, white, black } from '../../constants'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 30
  },
  h: {
    width: W - (Platform.OS === 'ios' ? 180 : 180),
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingBottom: 7,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

interface ButtonT {
  title: string
  color: string
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
