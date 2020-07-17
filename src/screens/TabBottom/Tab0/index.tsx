import React, { memo, useState, useEffect } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import VideoPlayer from 'react-native-video-controls'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

const Tab0 = memo(({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const { dark } = useTheme()

  useEffect(() => {
    //setLoading(true)
  }, [])

  const { container, backgroundVideo } = styles
  return (
    <>
      <View style={container}></View>
    </>
  )
})

export { Tab0 }
// ;<VideoPlayer
//   source={{ uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov' }}
//   navigator={navigation}
// />
