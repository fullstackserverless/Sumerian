import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet, scale, ms, s } from 'react-native-size-matters'
import { white, black } from '../../constants'
import { Txt } from '../Txt'

const diametr = 150

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    width: Platform.OS === 'ios' ? ms(diametr, 1) : ms(diametr, 1),
    height: Platform.OS === 'ios' ? ms(60, 0.6) : ms(50, 1),
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
  textColor?: string
  borderColor?: string
  cancel?: boolean
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const ButtonSquare = memo<ButtonSquareT>(
  ({ title, onPress, textStyle, color = white, borderColor = white, textColor = white }) => {
    const { container, h } = styles
    const { dark } = useTheme()
    const backgroundColor = dark ? black : color
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[container, { backgroundColor, borderColor }]}>
          <Txt h0 textStyle={[h, textStyle]} title={title} color={textColor} />
        </View>
      </TouchableOpacity>
    )
  }
)

export { ButtonSquare }
