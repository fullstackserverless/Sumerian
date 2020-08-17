import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet, scale, ms, s } from 'react-native-size-matters'
import { W, white, black } from '../../constants'
import { Txt } from '../Txt'

const diametr = 200

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    width: W - (Platform.OS === 'ios' ? ms(diametr, 1.8) : ms(diametr, 1.8)),
    height: Platform.OS === 'ios' ? ms(60, 1.8) : ms(diametr, 1.8),
    borderRadius: Platform.OS === 'ios' ? scale(40) : scale(35),
    borderWidth: 1,
    paddingTop: Platform.OS === 'ios' ? s(3) : s(0),
    justifyContent: 'center',
    margin: 10
  },
  h: {
    textAlign: 'center'
  }
})

interface ButtonSquareT {
  title: string
  color?: string
  cancel?: boolean
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const ButtonSquare = memo<ButtonSquareT>(({ title, onPress, textStyle, color = white }) => {
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

export { ButtonSquare }
