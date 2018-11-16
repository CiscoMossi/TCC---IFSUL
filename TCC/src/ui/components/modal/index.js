import React from 'react'
import Modal from 'react-native-modal'

export const DBModal = ({ isVisible, children, ...props }) => {
  if (!isVisible) {
    return null
  }

  return (
    <Modal isVisible={isVisible} { ...props }>
      { children }
    </Modal>
  )
}