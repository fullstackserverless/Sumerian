// @flow
import { Analytics, Auth } from 'aws-amplify'
import React, { memo, useEffect, useCallback, useState, ReactElement } from 'react'
import * as Keychain from 'react-native-keychain'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BBB, Txt, Space, BG, ButtonCircle } from '../../components'
import { onScreen, white, black } from '../../constants'
import { RootStackParamList } from '../../AppNavigator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  h3: {
    marginBottom: 0
  }
})

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FORGOT'>

type Stack0T = {
  navigation: ProfileScreenNavigationProp
}

const Stack0 = memo(
  ({ navigation }: Stack0T): ReactElement => {
    const [loading, setLoading] = useState(false)

    const key = useCallback(async () => {
      //await Keychain.resetInternetCredentials('auth')
      try {
        const credentials = await Keychain.getInternetCredentials('auth')
        if (credentials) {
          const { username, password } = credentials
          const user = await Auth.signIn(username, password)
          user && onScreen('MAIN', navigation)()
          setLoading(false)
        } else {
          setLoading(false)
        }
      } catch (err) {
        setLoading(false)
        Analytics.record({
          name: 'Stack0',
          attributes: err
        })
      }
    }, [navigation])

    useEffect(() => {
      setLoading(true)
      key()
    }, [navigation, key])

    const { container, h3 } = styles
    const { dark } = useTheme()

    return (
      <View style={[container, { backgroundColor: dark ? black : white }]}>
        <Space height={40} />
        <BBB title={dark ? '999B' : '999W'} onPress={onScreen('HELLO', navigation)} />
        <ButtonCircle title="start game" onPress={onScreen('HELLO', navigation)} />
        <Space height={0} />
        <Txt h3 title="@sumerianapp" viewStyle={h3} />
        <Space height={10} />
      </View>
    )
  }
)

export { Stack0 }
