import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export const DBHeader = ({ title }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{ title }</Text>
  </View>
)