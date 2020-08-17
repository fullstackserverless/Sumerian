import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { goBack, mustard, white } from '../../../constants'
import { AppContainer, Input, Space, Button, Header, ButtonLink } from '../../../components'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { createJavaScript, updateJavaScript, deleteJavaScript } from '../../../graphql/mutations'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB1_ADD'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB1_ADD'>

type Tab1AddT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab1Add = ({ route, navigation }: Tab1AddT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [check, setOwner] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [input, setJob] = useState<ObjT>({
    title: 'Data types',
    description: 'Learning the basics of the Java Script language.',
    img: 'https://s3.eu-central-1.wasabisys.com/ghashtag/JSForKids/00',
    uri: 'OifJhMwsC8Q',
    json: ''
  })

  const formikRef: any = useRef(null)

  useEffect(() => {
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setOwner(true)
      setJob(obj)
      const { setFieldValue } = formikRef.current
      const { id, title, description, img, uri, json } = obj
      setFieldValue('id', id)
      setFieldValue('title', title)
      setFieldValue('description', description)
      setFieldValue('img', img)
      setFieldValue('uri', uri)
      setFieldValue('json', json)
    }
  }, [route.params])

  const createObj = async (values: ObjT) => {
    setLoading(true)
    try {
      await API.graphql(graphqlOperation(createJavaScript, { input: values }))
      goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  const updateObj = async (values: ObjT) => {
    setLoading(true)
    try {
      await API.graphql(graphqlOperation(updateJavaScript, { input: values }))
      goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  const deleteObj = async ({ id }: ObjT) => {
    setLoading(true)
    try {
      await API.graphql(graphqlOperation(deleteJavaScript, { input: { id } }))
      goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} color={mustard}>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" colorLeft={white} />
      <Space height={70} />
      <Formik
        innerRef={formikRef}
        initialValues={input}
        onSubmit={(values) => (check ? updateObj(values) : createObj(values))}
        validationSchema={Yup.object().shape({
          title: Yup.string().min(3).required(),
          description: Yup.string().min(3).required(),
          img: Yup.string().min(3).required(),
          uri: Yup.string().min(3).required(),
          json: Yup.string().min(0)
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
              color={white}
            />
            <Input
              name="description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
              touched={touched}
              errors={errors}
              color={white}
            />
            <Input
              name="img"
              value={values.img}
              onChangeText={handleChange('img')}
              onBlur={() => setFieldTouched('img')}
              placeholder="Image path"
              touched={touched}
              errors={errors}
              color={white}
            />
            <Input
              name="uri"
              value={values.uri}
              onChangeText={handleChange('uri')}
              onBlur={() => setFieldTouched('uri')}
              placeholder="Video path"
              touched={touched}
              errors={errors}
              color={white}
            />
            <Input
              name="json"
              value={values.json}
              onChangeText={handleChange('json')}
              onBlur={() => setFieldTouched('json')}
              placeholder="Test path (JSON)"
              touched={touched}
              errors={errors}
              color={white}
            />
            <Space height={40} />
            <Button title={check ? 'Update' : 'Create'} onPress={handleSubmit} color={mustard} />
            {check && (
              <>
                <Space height={10} />
                <ButtonLink title="or" textStyle={{ alignSelf: 'center' }} />
                <>
                  <Space height={15} />
                  <Button title="DELETE" onPress={() => deleteObj(values)} cancel color={mustard} />
                </>
              </>
            )}
          </>
        )}
      </Formik>
      <Space height={100} />
    </AppContainer>
  )
}

export { Tab1Add }
