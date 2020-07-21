import React, { useState, useEffect, ReactElement } from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { ReactNative } from '../../../models'
import { goBack, onScreen, paleBlue } from '../../../constants'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { AppContainer, Space, Header, Card } from '../../../components'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB2_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB2_MAIN'>

type Tab2MainT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ItemT {
  item: ObjT
}

const Tab2Main = ({ navigation }: Tab2MainT): ReactElement => {
  const [data, updateData] = useState([
    {
      id: '0',
      title: 'Alphabet',
      description: 'Learning the basics of the English language.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
      uri: ''
    }
  ])
  const [error, setError] = useState<string>('')

  const fetchData = async () => {
    try {
      const arr = await DataStore.query(ReactNative)
      updateData(arr)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchData()
    const subscription = DataStore.observe(ReactNative).subscribe(() => fetchData())
    return () => {
      subscription.unsubscribe()
    }
  }, [navigation])

  const _renderItem = ({ item }: ItemT) => {
    const admin = Auth.user.signInUserSession.idToken.payload['cognito:groups'][0] === 'admin'
    return (
      <>
        <Card
          admin={admin}
          item={item}
          onPress={onScreen('TAB2_DETAIL', navigation, item)}
          onPressAdmin={onScreen('TAB2_ADD', navigation, item)}
        />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()

  return (
    <AppContainer onPress={goBack(navigation)} flatList error={error}>
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <Header
            onPressRight={onScreen('TAB2_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight="plus-a"
            colorLeft="transparent"
            colorRight={paleBlue}
            admin
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { Tab2Main }
