// @flow
import React, { memo } from 'react'
import { StyleSheet, Image, ImageStyle, StyleProp } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { ICONS } from './images'

const styles = StyleSheet.create({
  img: {
    ...ifIphoneX(
      {
        width: 40,
        height: 40
      },
      {
        width: 65,
        height: 35
      }
    )
  }
})

interface TabT {
  title: string
  imageStyle: StyleProp<ImageStyle>
}

const Tab = memo<TabT>(({ title, imageStyle }) => {
  const { img } = styles

  const source = () => ICONS.filter((x) => x.title === title)[0].path

  return <Image source={source()} style={[img, imageStyle]} />
})

export { Tab }
