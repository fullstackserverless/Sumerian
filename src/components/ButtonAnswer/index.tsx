import React, { memo } from 'react'
import { StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import { Txt } from '../Txt'
import { secondary, black, W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: black,
    borderWidth: 1,
    padding: 20,
    margin: 10
  },
  h: {
    color: secondary
  }
})

interface ButtonAnswerT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const ButtonAnswer = memo<ButtonAnswerT>(({ title, viewStyle, textStyle, onPress }) => {
  const { container, h } = styles

  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle, { shadowColor: black }]}>
      <Txt h6 title={title} textStyle={[h, textStyle]} color={secondary} />
    </TouchableOpacity>
  )
})

export { ButtonAnswer }
