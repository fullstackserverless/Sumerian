import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import YouTube from 'react-native-youtube'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: { alignSelf: 'stretch', height: W - 120 }
})

type YouTubePlayerT = {
  play: boolean
  uri: string
}
const apiKey = 'AIzaSyDLM6S57hfLoFfkovMzxdmO-sCdS8USQqY'

const YouTubePlayer = memo(({ play, uri }: YouTubePlayerT) => (
  <YouTube apiKey={apiKey} play={play} resumePlayAndroid={false} videoId={uri} loop style={styles.container} />
))

export { YouTubePlayer }
