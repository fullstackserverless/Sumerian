import React, { memo, useState } from 'react'
import { StyleSheet, Image, StyleProp, ViewStyle, TouchableOpacity, View } from 'react-native'
import { W, primary, secondary } from '../../constants'
import { Loading } from '../Loading'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  imageStyle: {
    width: W - 20,
    height: W - 20,
    borderRadius: 20
  }
})

interface CardT {
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
  item: {
    title: string
    uri: string
    img: string
  }
}

const Card = memo(({ item, onPress, viewStyle }: CardT) => {
  const [value, setValue] = useState<boolean>(false)
  const { container, imageStyle } = styles
  const { img } = item

  return (
    <>
      <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
        <Image style={imageStyle} source={{ uri: img }} onLoadEnd={(): void => setValue(true)} />
        {!value && <Loading type="Pulse" />}
      </TouchableOpacity>
    </>
  )
})

export { Card }
