import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import YouTube from 'react-native-youtube'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: { alignSelf: 'stretch', height: W }
})

type YouTubePlayerT = {
  uri: string
}

const YouTubePlayer = memo(({ uri }: YouTubePlayerT) => (
  <YouTube videoId={uri} play fullscreen loop style={styles.container} />
))

export { YouTubePlayer }
