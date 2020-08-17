import React, { memo } from 'react'
import { TouchableOpacity, View, GestureResponderEvent, Platform } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Emoji from 'react-native-emoji'
import { ScaledSheet, s, ms } from 'react-native-size-matters'
import { W, white, H } from '../../constants'
import { Txt } from '../Txt'
import { useOrientation } from '../../hooks'

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  leftIconStyle: {
    fontSize: 40,
    width: 60,
    height: 60,
    textAlign: 'center',
    top: 20,
    left: Platform.OS === 'ios' ? 10 : 25
  },
  rightIconStyle: {
    fontSize: 40,
    width: 60,
    height: 60,
    textAlign: 'center',
    top: 20
    //paddingHorizontal: Platform.OS === 'ios' ? 10 : 25
  },
  titleStyle: {
    color: '#fff',
    fontSize: 28,
    width: W - s(120),
    textAlign: 'center',
    ...ifIphoneX(
      {
        paddingTop: s(75)
      },
      {
        paddingTop: ms(35, 0.5)
      }
    )
  }
})

interface HeaderT {
  admin?: boolean
  title?: string
  iconLeft?: string
  iconRight?: string | null
  onPress?: (event: GestureResponderEvent) => void
  onPressRight?: (event: GestureResponderEvent) => void
}

const Header = memo<HeaderT>(({ title, admin = false, iconLeft, iconRight, onPress, onPressRight }) => {
  const { container, leftIconStyle, rightIconStyle, titleStyle } = styles
  const orientation = useOrientation()
  const width = orientation === 'LANDSCAPE' ? H : W
  return (
    <View style={[container, { width }]}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress}>
          <Emoji name={iconLeft} style={leftIconStyle} />
        </TouchableOpacity>
      )}
      {title && <Txt h0 title={title} color={white} textStyle={titleStyle} />}
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Emoji name={iconRight} style={rightIconStyle} />
        </TouchableOpacity>
      )}
    </View>
  )
})
{
  /* <AntDesign
              name={iconRight}
              style={[rightIconStyle, { paddingTop }]}
              color={colorRight ? colorRight : color}
            /> */
}
export { Header }
