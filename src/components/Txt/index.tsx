import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, ViewStyle, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet } from 'react-native-size-matters'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { W, white, black, primary, secondary, gray, dimGray, lightGray, Etna, KLMN, Narrow } from '../../constants'

const styles = ScaledSheet.create({
  h0Style: {
    fontSize: Platform.OS === 'ios' ? '32@ms' : '35@ms',
    fontFamily: Etna
  },
  h0StyleDark: {
    fontSize: Platform.OS === 'ios' ? '32@ms' : '35@ms',
    fontFamily: Etna
  },
  h1Style: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: secondary,
    color: black
  },
  h1StyleDark: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: white
  },
  h2Style: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: Etna,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    textShadowColor: secondary,
    color: black
  },
  h2StyleDark: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: Etna,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: white
  },
  h3Style: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: secondary,
    color: black
  },
  h3StyleDark: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: white
  },
  h4Style: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: dimGray
  },
  h4StyleDark: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: dimGray
  },
  h5Style: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: lightGray
  },
  h5StyleDark: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: lightGray
  },
  h6Style: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: 'Avenir Next',
    width: W - 90,
    textAlign: 'center',
    textShadowRadius: 1
  },
  h6StyleDark: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: 'Avenir Next',
    width: W - 90,
    textAlign: 'center'
  },
  h7Style: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: KLMN,
    color: black
  },
  h7StyleDark: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: KLMN,
    color: white
  },
  h8Style: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Narrow
  },
  h8StyleDark: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Narrow
  },
  h9Style: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Narrow
  },
  h9StyleDark: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Narrow
  },
  h10Style: {
    fontSize: Platform.OS === 'ios' ? '150@ms' : '150@ms',
    fontFamily: Etna
  },
  h10StyleDark: {
    fontSize: Platform.OS === 'ios' ? '150@ms' : '150@ms',
    fontFamily: Etna
  },
  h11Style: {
    fontSize: Platform.OS === 'ios' ? '30@s' : '30@s',
    fontFamily: 'Avenir Next',
    width: W - 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  h11StyleDark: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '25@s',
    fontFamily: 'Avenir Next',
    width: W - 50,
    textAlign: 'center'
  },
  errorStyle: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: Narrow
  },
  errorStyleDark: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '35@s',
    fontFamily: Narrow
  },
  bodyStyle: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      },
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      }
    ),
    fontFamily: KLMN,
    color: gray
  },
  bodyStyleDark: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      },
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      }
    ),
    fontFamily: KLMN,
    color: gray
  }
})

interface TxtT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  h7?: boolean
  h8?: boolean
  h9?: boolean
  h10?: boolean
  h11?: boolean
  color?: string
  body?: boolean
  error?: boolean
  title: string
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  textStyle?: StyleProp<TextStyle>
}

const Txt = memo<TxtT>(
  ({
    h0,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    body,
    title,
    textStyle,
    numberOfLines,
    ellipsizeMode,
    error,
    color
  }) => {
    const { dark } = useTheme()
    const {
      h0Style,
      h1Style,
      h2Style,
      h3Style,
      h4Style,
      h5Style,
      h6Style,
      h7Style,
      h8Style,
      h9Style,
      h10Style,
      h11Style,
      bodyStyle,
      errorStyle,
      h0StyleDark,
      h1StyleDark,
      h2StyleDark,
      h3StyleDark,
      h4StyleDark,
      h5StyleDark,
      h6StyleDark,
      h7StyleDark,
      h8StyleDark,
      h9StyleDark,
      h10StyleDark,
      h11StyleDark,
      bodyStyleDark,
      errorStyleDark
    } = styles
    return (
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        style={[
          textStyle,
          h0 && StyleSheet.flatten([dark ? h0StyleDark : h0Style, { color }]),
          h1 && StyleSheet.flatten([dark ? h1StyleDark : h1Style]),
          h2 && StyleSheet.flatten([dark ? h2StyleDark : h2Style]),
          h3 && StyleSheet.flatten([dark ? h3StyleDark : h3Style]),
          h4 && StyleSheet.flatten([dark ? h4StyleDark : h4Style]),
          h5 && StyleSheet.flatten([dark ? h5StyleDark : h5Style]),
          h6 && StyleSheet.flatten([dark ? h6StyleDark : h6Style, { color }]),
          h7 && StyleSheet.flatten([dark ? h7StyleDark : h7Style]),
          h8 && StyleSheet.flatten([dark ? h8StyleDark : h8Style]),
          h9 && StyleSheet.flatten([dark ? h9StyleDark : h9Style]),
          h10 && StyleSheet.flatten([dark ? h10StyleDark : h10Style, { color }]),
          h11 && StyleSheet.flatten([dark ? h11StyleDark : h11Style, { color }]),
          error && StyleSheet.flatten([dark ? errorStyleDark : errorStyle]),
          body && StyleSheet.flatten([dark ? bodyStyleDark : bodyStyle])
        ]}
      >
        {title}
      </Text>
    )
  }
)

export { Txt }
