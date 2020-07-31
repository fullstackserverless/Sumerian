import React, { memo, useState, useEffect } from 'react'
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { Background } from '../Background'
import { Txt } from '../Txt'
import { Avatar } from '../Avatar'
import { Space } from '../Space'
import { Device } from '../../constants'
import { UserT } from '../../AppNavigator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 12,
    height: 310
  },
  starStyle: {
    position: 'absolute',
    top: 15,
    right: Platform.OS === 'ios' ? 15 : 28,
    zIndex: 1
  },
  avatarStyle: {
    position: 'absolute',
    ...Device.select({
      mobile300: {
        top: 110
      },
      mobile315: {
        top: 110
      },
      mobile342: {
        top: 110
      },
      mobile360: {
        top: 110
      },
      mobile375: {
        top: 140
      },
      mobile400: {
        top: 140
      },
      mobile410: {
        top: 160
      },
      mobile415: {
        top: 160
      },
      mobile480: {
        top: 160
      }
    }),
    zIndex: 0
  },
  h2: {
    textAlign: 'center',
    top: 80
  }
})

interface HeaderMasterT {
  loading: boolean
  user: UserT
  onPress?: () => void
}

const HeaderMaster = memo(({ loading, user, onPress }: HeaderMasterT) => {
  const { container, avatarStyle, h2 } = styles
  const { firstName, lastName, email, avatar } = user
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Background>
        <Avatar avatar={avatar} viewStyle={avatarStyle} size="xLarge" onPress={onPress} loading={loading} />
      </Background>
      <Txt h2 title={`${firstName} ${lastName}`} textStyle={h2} />
      <Space height={10} />
      <Txt h3 title={email} textStyle={h2} />
    </TouchableOpacity>
  )
})

export { HeaderMaster }
