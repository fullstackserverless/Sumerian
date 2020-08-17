import React, { memo } from 'react'
import { Platform, StyleSheet, StyleProp, ViewStyle, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Emoji from 'react-native-emoji'
import { Txt } from '../Txt'
import { white } from '../../constants'

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    padding: 1
  },
  emoji: {
    left: Platform.OS === 'ios' ? 1 : 0
  }
})

interface EmojiViewT {
  name: string
  onPress?: () => void
  fontSize: any
  opacity?: number
  viewStyle?: StyleProp<ViewStyle>
}

const EmojiView = memo<EmojiViewT>(({ name, fontSize, onPress, viewStyle, opacity }) => {
  const { container, emoji } = styles
  return (
    <View style={StyleSheet.flatten([container, viewStyle, { opacity }])}>
      {name.length > 3 ? (
        <Emoji name={name} style={StyleSheet.flatten([emoji, { fontSize }])} />
      ) : (
        <Txt h10 title={name} color={white} />
      )}
    </View>
  )
})

export { EmojiView }
