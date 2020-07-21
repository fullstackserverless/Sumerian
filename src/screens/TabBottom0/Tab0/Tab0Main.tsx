import React, { useState, useEffect, ReactElement } from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { AppContainer, Space, Header, Card } from '../../../components'
import { DataStore } from '@aws-amplify/datastore'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { English } from '../../../models'
import { goBack, onScreen, classicRose } from '../../../constants'
import { RootStackParamList, ObjT } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_MAIN'>

type Tab0MainT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ItemT {
  item: ObjT
}

const Tab0Main = ({ navigation }: Tab0MainT): ReactElement => {
  const [data, updateData] = useState([
    {
      id: '0',
      title: 'Alphabet',
      description: 'Learning the basics of the English language.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
      uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov'
    }
  ])
  const [error, setError] = useState<string>('')

  const fetchData = async () => {
    try {
      const arr = await DataStore.query(English)
      updateData(arr)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchData()
    const subscription = DataStore.observe(English).subscribe(() => fetchData())
    return () => {
      subscription.unsubscribe()
    }
  }, [navigation])

  const _renderItem = ({ item }: ItemT) => {
    const check = Auth.user.signInUserSession.idToken.payload['cognito:groups']
    const admin =
      check !== undefined ? Auth.user.signInUserSession.idToken.payload['cognito:groups'][0] === 'admin' : false
    return (
      <>
        <Card
          admin={admin || false}
          item={item}
          onPress={onScreen('TAB0_DETAIL', navigation, item)}
          onPressAdmin={onScreen('TAB0_ADD', navigation, item)}
        />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()

  return (
    <AppContainer onPress={goBack(navigation)} flatList message={error}>
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <Header
            onPressRight={onScreen('TAB0_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight="plus-a"
            colorLeft="transparent"
            colorRight={classicRose}
            admin
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { Tab0Main }
