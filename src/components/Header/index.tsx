import React, { memo } from 'react'
import { TouchableOpacity, View, GestureResponderEvent, Platform } from 'react-native'
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
    paddingBottom: 20
  },
  leftIconStyle: {
    fontSize: 33,
    width: 60,
    height: 60,
    textAlign: 'center',
    top: 20,
    left: Platform.OS === 'ios' ? 10 : 25
  },
  rightIconStyle: {
    fontSize: 33,
    width: 60,
    height: 60,
    textAlign: 'center',
    top: 20
  },
  titleStyle: {
    color: '#fff',
    fontSize: 28,
    width: W - s(120),
    textAlign: 'center',
    paddingTop: 25
  }
})

interface HeaderT {
  title?: string
  iconLeft?: string
  iconRight?: string | null
  onPress?: (event: GestureResponderEvent) => void
  onPressRight?: (event: GestureResponderEvent) => void
}

const Header = memo<HeaderT>(({ title, iconLeft, iconRight, onPress, onPressRight }) => {
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

export { Header }
