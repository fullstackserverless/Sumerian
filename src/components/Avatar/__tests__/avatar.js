import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<View />).toJSON()
  expect(tree).toMatchSnapshot()
})
