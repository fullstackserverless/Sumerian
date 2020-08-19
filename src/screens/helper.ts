import { Storage } from 'aws-amplify'
import uuid from 'react-native-uuid'
import ImagePicker from 'react-native-image-crop-picker'
import { S3ObjectT } from '../AppNavigator'
import { ObjT, ProgT } from '../AppNavigator'

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
}

export interface StateT {
  data: ObjT
  prog: ProgT
}

export { pickAva, createImage, updateImage, fetchImage }
