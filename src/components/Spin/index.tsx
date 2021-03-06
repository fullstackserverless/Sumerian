import React from 'react'
import { StyleSheet, View } from 'react-native'
import Spinner from 'react-native-spinkit'
import { useTheme } from '@react-navigation/native'
import { primary, secondary, black, white } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  }
})

interface SpinT {
  color: string
}

const Spin = ({ color = secondary }: SpinT) => {
  const { dark } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: dark ? black : white }]}>
      <Spinner size={65} type="Pulse" color={color} />
    </View>
  )
}

export { Spin }
