import React from 'react'
import Modal from 'react-native-modal'

export const DBModal = ({ isVisible, children, style, ...props }) => {
  if (!isVisible) {
    return null
  }

  return (
    <Modal animationIn="slideInLeft" style={[{ margin: 0}, style]} isVisible={isVisible} { ...props }>
      { children }
    </Modal>
  )
}