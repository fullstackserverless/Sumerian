import React, { useState, useEffect, ReactElement } from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { TypeScript } from '../../../models'
import { goBack, onScreen, trueBlue } from '../../../constants'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { AppContainer, Space, Header, Card } from '../../../components'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB3_MAIN'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB3_MAIN'>

type Tab3MainT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

interface ItemT {
  item: ObjT
}

const Tab3Main = ({ navigation }: Tab3MainT): ReactElement => {
  const [error, setError] = useState<string>('')
  const [admin, setAdmin] = useState<boolean>(false)
  const [data, updateData] = useState<Array<ObjT>>([
    {
      id: '0',
      title: 'Alphabet',
      description: 'Learning the basics of the English language.',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
      uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov'
    }
  ])

  const fetchData = async () => {
    try {
      const arr = await DataStore.query(TypeScript)
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
    const subscription = DataStore.observe(TypeScript).subscribe(() => fetchData())
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
          onPress={onScreen('TAB3_DETAIL', navigation, item)}
          onPressAdmin={onScreen('TAB3_ADD', navigation, item)}
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
            onPressRight={onScreen('TAB3_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight={admin ? 'plus-a' : null}
            colorLeft="transparent"
            colorRight={trueBlue}
            admin={admin}
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { Tab3Main }