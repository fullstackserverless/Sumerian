import React, { useState, useEffect, ReactElement } from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import { Amplify } from '../../../models'
import { goBack, onScreen, fuchsia } from '../../../constants'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { AppContainer, Space, Header, Card } from '../../../components'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB4_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB4_MAIN'>

type Tab4MainT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ItemT {
  item: ObjT
}

const Tab4Main = ({ navigation }: Tab4MainT): ReactElement => {
  const [data, updateData] = useState<Array<ObjT>>([
    {
      id: '0',
      title: 'Alphabet',
      description: 'Learning the basics of the English language.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
      uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov'
    }
  ])
  const [error, setError] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const arr = await DataStore.query(Amplify)
      updateData(arr)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    // @ts-expect-error
    const check = Auth.user.signInUserSession.idToken.payload['cognito:groups']
    const adm =
      // @ts-expect-error
      check !== undefined ? Auth.user.signInUserSession.idToken.payload['cognito:groups'][0] === 'Admin' : false
    setAdmin(adm)
    fetchData()
    const subscription = DataStore.observe(Amplify).subscribe(() => fetchData())
    return () => {
      subscription.unsubscribe()
    }
  }, [navigation])

  const _renderItem = ({ item }: ItemT) => {
    return (
      <>
        <Card
          admin={admin}
          item={item}
          onPress={onScreen('TAB4_DETAIL', navigation, item)}
          onPressAdmin={onScreen('TAB4_ADD', navigation, item)}
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
            onPressRight={onScreen('TAB4_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight={admin ? 'plus-a' : null}
            colorLeft="transparent"
            colorRight={fuchsia}
            admin={admin}
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { Tab4Main }