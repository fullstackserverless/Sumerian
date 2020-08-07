import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

interface RowT {
  children: React.ReactNode
}

const Row = memo<RowT>(({ children }) => {
  const { container } = styles
  return <View style={container}>{children}</View>
})

export { Row }