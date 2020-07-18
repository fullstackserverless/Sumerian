import React, { memo, useState } from 'react'
import { StyleSheet, Image, StyleProp, ViewStyle, TouchableOpacity, View } from 'react-native'
import { W, primary, secondary } from '../../constants'
import { Loading } from '../Loading'
import { ButtonIconCircle } from '../ButtonIconCircle'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  imageStyle: {
    width: W - 20,
    height: W - 20,
    borderRadius: 20
  },
  iconStyle: {
    alignSelf: 'flex-end',
    right: 10,
    bottom: 45
  }
})

interface CardT {
  admin: boolean
  onPress?: () => void
  onPressAdmin?: () => void
  viewStyle?: StyleProp<ViewStyle>
  item: {
    title: string
    uri: string
    img: string
  }
}

const Card = memo(({ admin, item, onPress, onPressAdmin, viewStyle }: CardT) => {
  const [value, setValue] = useState<boolean>(false)
  const { container, imageStyle, iconStyle } = styles
  const { img } = item

  return (
    <>
      <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
        <Image style={imageStyle} source={{ uri: img }} onLoadEnd={(): void => setValue(true)} />
        {!value && <Loading type="Pulse" />}
        {admin && <ButtonIconCircle name=":lower_left_ballpoint_pen:" viewStyle={iconStyle} onPress={onPressAdmin} />}
      </TouchableOpacity>
    </>
  )
})

export { Card }
