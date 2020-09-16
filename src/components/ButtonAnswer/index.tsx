import React, { memo } from 'react'
import { StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import { Txt } from '../Txt'
import { secondary, black, W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    borderWidth: 1,
    padding: 20,
    margin: 10
  }
})

interface ButtonAnswerT {
  title: string
  color?: string
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const ButtonAnswer = memo<ButtonAnswerT>(({ title, color = black, viewStyle, textStyle, onPress }) => {
  const { container, h } = styles

  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle, { borderColor: color, shadowColor: color }]}>
      <Txt h6 title={title} textStyle={[textStyle]} color={color} />
    </TouchableOpacity>
  )
})

export { ButtonAnswer }
