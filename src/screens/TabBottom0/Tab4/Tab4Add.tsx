import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { Amplify } from '../../../models'
import { goBack, classicRose } from '../../../constants'
import { AppContainer, Input, Space, Button, Header, ButtonLink } from '../../../components'
import { RootStackParamList, ObjT } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB4_ADD'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB4_ADD'>

type Tab4AddT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab4Add = ({ route, navigation }: Tab4AddT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [check, setOwner] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [input, setObj] = useState<ObjT>({
    id: '',
    title: 'Authentication 🔐 FULL SETUP',
    description: 'Learning the basics of the AWS Amplify.',
    img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/AWSForKids/Authentication.png',
    uri: 'QMObthDaewQ'
  })

  const formikRef: any = useRef(null)

  useEffect(() => {
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setOwner(true)
      setObj(obj)
      const { setFieldValue } = formikRef.current
      const { title, description, img, uri } = obj
      setFieldValue('title', title)
      setFieldValue('description', description)
      setFieldValue('img', img)
      setFieldValue('uri', uri)
    }
  }, [route.params])

  const createObj = async (values: ObjT) => {
    try {
      const obj = await DataStore.save(new Amplify({ ...values }))
      obj && goBack(navigation)()
    } catch (err) {
      setError(err)
    }
  }

  const updateObj = async ({ title, description, img, uri }: ObjT) => {
    try {
      setLoading(true)
      const original = await DataStore.query(Amplify, input.id)
      const update = await DataStore.save(
        Amplify.copyOf(original, (updated) => {
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

  const deleteObj = async () => {
    try {
      setLoading(true)
      const obj = await DataStore.query(Amplify, input.id)
      const del = await DataStore.delete(obj)
      del && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} message={error}>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" colorLeft={classicRose} />
      <Space height={20} />
      <Formik
        innerRef={formikRef}
        initialValues={input}
        onSubmit={(values) => (check ? updateObj(values) : createObj(values))}
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
                <Button title="DELETE" onPress={deleteObj} cancel />
              </>
            )}
          </>
        )}
      </Formik>
      <Space height={100} />
    </AppContainer>
  )
}

export { Tab4Add }
