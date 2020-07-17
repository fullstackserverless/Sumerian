import React, { memo, useState, useEffect, useReducer } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Boho, Space, BG } from '../../../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

const Tab2 = memo(() => {
  const [loading, setLoading] = useState(false)
  const { dark } = useTheme()

  useEffect(() => {
    //setLoading(true)
  }, [])

  const { container } = styles
  return (
    <BG title={dark ? 'shakti0B' : 'shakti0W'} loading={loading}>
      <View style={container}>
        <Space height={Platform.OS === 'ios' ? getStatusBarHeight() : 20} />
        <Space height={Platform.OS === 'ios' ? 10 : 20} />
        <Boho title={dark ? 'BohoB' : 'BohoW'} />
      </View>
    </BG>
  )
})

export { Tab2 }
