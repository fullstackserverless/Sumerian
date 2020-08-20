// @flow
import React, { memo } from 'react'
import { View } from 'react-native'
import * as Progress from 'react-native-progress'
import { ScaledSheet, ms, s } from 'react-native-size-matters'
import { white } from '../../constants'

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    paddingTop: ms(5, 1.2),
    paddingBottom: ms(15, 1.2)
  }
})

interface ProgressBarT {
  progress: number
}

const ProgressBar = memo<ProgressBarT>(({ progress }) => {
  const { container } = styles
  const formatText = () => `${progress * 100}%`
  return (
    <View style={container}>
      <Progress.Circle progress={progress} showsText={true} formatText={formatText} size={s(80)} color={white} />
    </View>
  )
})

export { ProgressBar }
