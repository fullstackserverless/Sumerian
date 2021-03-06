import React from 'react'
import { View, Text, Modal } from 'react-native'
import { ScaledSheet, ms } from 'react-native-size-matters'
import I18n from '../../utils'

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    fontSize: ms(14, 0.5),
    marginBottom: 15,
    textAlign: 'center'
  }
})

interface ModalMinimalVersionT {
  visible: boolean
}

const ModalMinimalVersion = ({ visible }: ModalMinimalVersionT) => {
  const { container, centeredView, modalView, modalText } = styles

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={container}>
        <View style={centeredView}>
          <View style={modalView}>
            <Text style={modalText}>{I18n.t('newVersion')}</Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export { ModalMinimalVersion }
