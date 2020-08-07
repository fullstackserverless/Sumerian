// @flow
import React, { memo } from 'react'
import { StyleSheet, StyleProp, ImageStyle, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: 70,
        height: 70
      },
      {
        width: 85,
        height: 85
      }
    )
  }
})

interface SumeriranT {
  imageStyle?: StyleProp<ImageStyle>
  onPress?: () => void
}

const Sumerian = memo(({ imageStyle }: SumeriranT) => {
  const { img } = styles
  const { dark } = useTheme()
  const background = dark ? require('./logo-light.png') : require('./logo-dark.png')

  return <Image source={background} style={[img, imageStyle]} />
})

export { Sumerian }
