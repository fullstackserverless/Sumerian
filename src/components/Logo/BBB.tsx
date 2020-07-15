// @flow
import React, { memo } from 'react'
import { StyleSheet, StyleProp, ImageStyle, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

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

interface BBBT {
  title: string
  imageStyle?: StyleProp<ImageStyle>
  onPress?: () => void
}

const BBB = memo(({ title, imageStyle }: BBBT) => {
  const { img } = styles

  const source = () => ICONS.filter((x) => x.title === title)[0].path

  return <Image source={source()} style={[img, imageStyle]} />
})

export { BBB }
