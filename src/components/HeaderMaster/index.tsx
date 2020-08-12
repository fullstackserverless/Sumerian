import React, { memo } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { Background } from '../Background'
import { Txt } from '../Txt'
import { ScaledSheet, s } from 'react-native-size-matters'
import { Space } from '../Space'
import { Device } from '../../constants'
import { UserT } from '../../AppNavigator'

const styles = ScaledSheet.create({
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
    top: s(200)
  }
})

interface HeaderMasterT {
  loading: boolean
  user: UserT
  onPress?: () => void
}

const HeaderMaster = memo(({ loading, user, onPress }: HeaderMasterT) => {
  const { container, h2 } = styles
  const { firstName, lastName, email } = user
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Background>
        <Txt h2 title={`${firstName} ${lastName}`} textStyle={h2} />
        <Space height={10} />
        <Txt h3 title={email} textStyle={h2} />
      </Background>
    </TouchableOpacity>
  )
})
//<Avatar avatar={avatar} viewStyle={avatarStyle} size="xLarge" onPress={onPress} loading={loading} />
export { HeaderMaster }
