import React from 'react'
import { StyleSheet, View } from 'react-native'
import Spinner from 'react-native-spinkit'
import { useTheme } from '@react-navigation/native'
import { primary, secondary, black, white } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

interface LoadingT {
  paddingTop: number
}

const Loading = ({ paddingTop = 0 }: LoadingT) => {
  const { dark } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: dark ? black : white, paddingTop }]}>
      <Spinner size={65} type="Pulse" color={dark ? secondary : primary} />
    </View>
  )
}

export { Loading }
