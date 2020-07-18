import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { English } from '../../../models'
import { goBack, classicRose } from '../../../constants'
import { AppContainer, Input, Space, Button, Header, ButtonLink } from '../../../components'
import { RootStackParamList } from '../../../AppNavigator'
import { ObjT } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_ADD'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_ADD'>

type Tab0AddT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab0Add = ({ route, navigation }: Tab0AddT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [check, setOwner] = useState(false)
  const [error, setError] = useState('')

  const [input, setJob] = useState({
    id: '',
    title: 'Alphabet',
    description: 'Learning the basics of the English language.',
    img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.png',
    uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/Alphabet.mov'
  })

  const formikRef = useRef()

  useEffect(() => {
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setOwner(true)
      setJob(obj)
      const { setFieldValue } = formikRef.current
      const { title, description, img, uri } = obj
      setFieldValue('title', title)
      setFieldValue('description', description)
      setFieldValue('img', img)
      setFieldValue('uri', uri)
    }
  }, [route.params])

  const createJob = async (values: ObjT) => {
    try {
      const obj = await DataStore.save(new English({ ...values }))
      obj && goBack(navigation)()
    } catch (err) {
      setError(err)
    }
  }

  const updateJob = async ({ title, description, img, uri }: ObjT) => {
    try {
      setLoading(true)
      const original = await DataStore.query(English, input.id)
      const update = await DataStore.save(
        English.copyOf(original, (updated) => {
          updated.title = title
          updated.description = description
          updated.img = img
          updated.uri = uri
        })
      )
      update && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  const deleteJob = async () => {
    try {
      setLoading(true)
      const job = await DataStore.query(English, input.id)
      const del = await DataStore.delete(job)
      del && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} error={error}>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" colorLeft={classicRose} />
      <Space height={20} />
      <Formik
        innerRef={formikRef}
        initialValues={input}
        onSubmit={(values) => (check ? updateJob(values) : createJob(values))}
        validationSchema={Yup.object().shape({
          title: Yup.string().min(3).required(),
          description: Yup.string().min(3).required(),
          img: Yup.string().min(3).required(),
          uri: Yup.string().min(3).required()
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
          <>
            <Input
              name="title"
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={() => setFieldTouched('title')}
              placeholder="Title"
              touched={touched}
              errors={errors}
              color={classicRose}
            />
            <Input
              name="description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
              touched={touched}
              errors={errors}
              color={classicRose}
            />
            <Input
              name="img"
              value={values.img}
              onChangeText={handleChange('img')}
              onBlur={() => setFieldTouched('img')}
              placeholder="Image path"
              touched={touched}
              errors={errors}
              color={classicRose}
            />
            <Input
              name="uri"
              value={values.uri}
              onChangeText={handleChange('uri')}
              onBlur={() => setFieldTouched('uri')}
              placeholder="Video path"
              touched={touched}
              errors={errors}
              color={classicRose}
            />
            <Space height={40} />
            <Button title={check ? 'Update' : 'Create'} onPress={handleSubmit} />
            {check && (
              <>
                <Space height={10} />
                <ButtonLink title="or" textStyle={{ alignSelf: 'center' }} />
                <Space height={15} />
                <Button title="DELETE" onPress={deleteJob} cancel />
              </>
            )}
          </>
        )}
      </Formik>
      <Space height={100} />
    </AppContainer>
  )
}

export { Tab0Add }
