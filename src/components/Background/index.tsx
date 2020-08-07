import React, { memo } from 'react'
import { StyleSheet, ImageBackground, View, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  img: {
    width: W,
    height: W / 1.8
  }
})

interface BackgroundT {
  uri?: string
  onPress?: () => void
  children?: React.ReactNode
}

const Background = memo(({ children, uri, onPress }: BackgroundT) => {
  const { container, img } = styles
  const { dark } = useTheme()
  const background = dark ? require('./backgroundB.png') : require('./backgroundW.png')
  return (
    <View style={container}>
      {children ? (
        <ImageBackground style={img} source={uri ? { uri } : background}>
          {children}
        </ImageBackground>
      ) : (
        <Image style={img} source={uri ? { uri } : background} />
      )}
    </View>
  )
})

export { Background }
