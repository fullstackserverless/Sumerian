import React, { useState, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import VideoPlayer from 'react-native-video-controls'
import { Auth } from 'aws-amplify'
import { AppContainer, Space, Header, Card } from '../../../components'
import { DataStore } from '@aws-amplify/datastore'
import { English } from '../../../models'
import { goBack, onScreen, classicRose } from '../../../constants'

const Tab0Main = ({ navigation }) => {
  const [data, updateData] = useState([
    {
      id: 0,
      title: 'Alphabet',
      description: 'info',
      img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
      uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov'
    }
  ])

  const fetchJobs = async () => {
    //const arr = await DataStore.query(English)
    //updateData(arr)
  }

  useEffect(() => {
    // fetchJobs()
    // const subscription = DataStore.observe(English).subscribe(() => fetchJobs())
    // return () => {
    //   subscription.unsubscribe()
    // }
  }, [data])

  const _renderItem = ({ item }) => {
    const owner = Auth.user.attributes.sub
    const check = owner === item.owner
    return (
      <>
        <Card item={item} onPress={onScreen('TAB0_DETAIL', navigation, item)} />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = (obj: any) => obj.id.toString()

  console.log('data', data)
  return (
    <AppContainer onPress={goBack(navigation)} flatList>
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
// ;<VideoPlayer
//   source={{ uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov' }}
//   navigator={navigation}
// />
