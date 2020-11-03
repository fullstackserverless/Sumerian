import React, { memo } from 'react'
import { TouchableOpacity, View, GestureResponderEvent } from 'react-native'
import Emoji from 'react-native-emoji'
import { ScaledSheet, s, ms } from 'react-native-size-matters'
import { W, white, H } from '../../constants'
import { Txt } from '../Txt'
import { useOrientation } from '../../hooks'

const styles = ScaledSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: s(20)
    //backgroundColor: 'green'
  },
  leftIconStyle: {
    fontSize: '33@ms',
    width: ms(60, 0.5),
    height: ms(60, 0.5),
    textAlign: 'center',
    top: ms(20, 0.8),
    left: s(5)
  },
  rightIconStyle: {
    fontSize: '33@ms',
    width: ms(60, 0.5),
    height: ms(60, 0.5),
    textAlign: 'center',
    top: ms(20, 0.8),
    right: s(5),
  },
  titleStyle: {
    flex: 0.9,
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    top: s(10),
   // backgroundColor: 'gold'
  }
})

interface HeaderT {
  title?: string
  color?: string
  iconLeft?: string
  iconRight?: string | null
  onPress?: (event: GestureResponderEvent) => void
  onPressRight?: (event: GestureResponderEvent) => void
}

const Header = memo<HeaderT>(({ color = white, title, iconLeft, iconRight, onPress, onPressRight }) => {
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
      {title && <Txt h0 title={title} color={color} textStyle={titleStyle} />}
      {iconRight ? (
        <TouchableOpacity onPress={onPressRight}>
          <Emoji name={iconRight} style={rightIconStyle} />
        </TouchableOpacity>
      ) : (
        <View style={rightIconStyle} />
      )}
    </View>
  )
})

export { Header }
