import { Storage } from 'aws-amplify'
import uuid from 'react-native-uuid'
import ImagePicker from 'react-native-image-crop-picker'
import { API, graphqlOperation } from 'aws-amplify'
import { S3ObjectT } from '../AppNavigator'
import { ObjT, ProgT, ExamT } from '../AppNavigator'
import { listProfiles } from '../../src/graphql/queries'
import * as Keychain from 'react-native-keychain'

const fetchImage = async (avatar: S3ObjectT) => {
  try {
    return await Storage.get(avatar.key)
  } catch (err) {
    return err
  }
}

interface createImageT {
  path: string
  mime: string
}

const updateImage = async (oldKey: string, ava: createImageT) => {
  const { path, mime } = ava
  const response = await fetch(path)
  const blob = await response.blob()
  const extension = path.split('.')[1]
  const key = `avatar-${uuid.v4()}.${extension}`
  try {
    await Storage.remove(oldKey)
    const newKey = await Storage.put(key, blob, {
      contentType: mime
    })
    return newKey
  } catch (err) {
    return err.message
  }
}

const createImage = async (ava: createImageT) => {
  const { path, mime } = ava
  const response = await fetch(path)
  const blob = await response.blob()
  const extension = path.split('.')[1]
  const key = `avatar-${uuid.v4()}.${extension}`
  try {
    return await Storage.put(key, blob, {
      contentType: mime
    })
  } catch (err) {
    return err.message
  }
}

const pickAva = async (cropping = true, circular = true) => {
  try {
    return await ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true
    })
  } catch (err) {
    return err
  }
}

export interface ActionT {
  type: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'READ_PROGRESS'
  data: ObjT
  prog: ProgT
  exam: ExamT
}

export interface StateT {
  data: ObjT
  prog: ProgT
  exam: ExamT
}

const compareCreatedAt = (a: { createdAt: string }, b: { createdAt: string }) => {
  if (a.createdAt > b.createdAt) {
    return -1
  }
  if (a.createdAt < b.createdAt) {
    return 1
  }
  return 0
}

const compareTitle = (a: { title: string }, b: { title: string }) => {
  if (a.title < b.title) {
    return -1
  }
  if (a.title > b.title) {
    return 1
  }
  return 0
}

const sortTitle = (data: any) => data.sort(compareTitle)
const sortCreatedAt = (data: any) => data.sort(compareCreatedAt)

const onlyTitleInArray = (data: any) => data.map((x: any) => x.title)

const fetchExam = async (url: string) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return error
  }
}

const arrayWithNewId = (x: any) => x.map((e: {}, i: string) => ({ ...e, id: i }))

const jsonToString = (x: any) => JSON.stringify(arrayWithNewId(x))

const user = async () => {
  const credentials = await Keychain.getInternetCredentials('auth')
  const { username } = credentials
  const obj = await API.graphql(
    graphqlOperation(listProfiles, {
      filter: {
        email: {
          eq: username
        }
      }
    })
  )
  // @ts-expect-error
  return obj && updateData(obj.data.listProfiles.items[0])
}

export {
  pickAva,
  createImage,
  updateImage,
  fetchImage,
  sortCreatedAt,
  sortTitle,
  fetchExam,
  arrayWithNewId,
  jsonToString,
  onlyTitleInArray,
  compareCreatedAt,
  user
}
