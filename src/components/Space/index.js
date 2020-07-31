// @flow
import React, { memo } from 'react'
import { View } from 'react-native'

type SpaceT = {
  height?: number,
  width?: number
}

const Space = memo<SpaceT>(({ height, width }) => <View style={{ height: height || 0, width: width || 0 }} />)

export { Space }
