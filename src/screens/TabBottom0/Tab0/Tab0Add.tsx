import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
// @ts-expect-error
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useTheme } from '@react-navigation/native'
import { goBack, classicRose, white, black } from '../../../constants'
import { AppContainer, Input, Space, Button, ButtonLink } from '../../../components'
import { RootStackParamList, ObjT } from '../../../AppNavigator'
import { createEnglish, updateEnglish, deleteEnglish } from '../../../graphql/mutations'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TAB0_ADD'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TAB0_ADD'>

type Tab0AddT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Tab0Add = ({ route, navigation }: Tab0AddT): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [check, setOwner] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { dark } = useTheme()

  const [input, setJob] = useState<ObjT>({
    title: '',
    description: '',
    img: '',
    uri: '',
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
      await API.graphql(graphqlOperation(createEnglish, { input: values }))
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
      await API.graphql(graphqlOperation(updateEnglish, { input: values }))
      goBack(navigation)()
      setLoading(false)
    } catch (err) {
      // console.log('err', err)
      setError(err)
      setLoading(false)
    }
  }

  const deleteObj = async ({ id }: ObjT) => {
    setLoading(true)
    try {
      await API.graphql(graphqlOperation(deleteEnglish, { input: { id } }))
      goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  return (
    <AppContainer
      backgroundColor={dark ? black : classicRose}
      title=" "
      onPress={goBack(navigation)}
      colorLeft={white}
      color={classicRose}
    >
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
          json: Yup.string().min(3).required()
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
            <Button title={check ? 'Update' : 'Create'} onPress={handleSubmit} color={classicRose} />
            {check && (
              <>
                <Space height={10} />
                <ButtonLink title="or" textStyle={{ alignSelf: 'center' }} />
                <>
                  <Space height={15} />
                  <Button title="DELETE" onPress={() => deleteObj(values)} cancel color={classicRose} />
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

export { Tab0Add }
