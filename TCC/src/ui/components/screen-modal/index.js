import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { DBModal } from '../modal'

import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'

export const DBScreenWrapper = ({ children, onBack, visible }) => (
  <DBModal isVisible={visible}>
    <View style={styles.modal}>
      <TouchableOpacity style={styles.back} onPress={onBack}>
        <Icon name="arrow-left" size={30} style={styles.icon} />
      </TouchableOpacity>
      { children }
    </View>
  </DBModal>
)