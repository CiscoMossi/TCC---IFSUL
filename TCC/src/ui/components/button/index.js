import React from 'react'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { gradientColors } from '../default'

import styles from './style'
export const DBButton = ({ onPress, children, style, ...props }) => (
  <TouchableOpacity { ...props } style={styles.wrapper} onPress={onPress}>
    <LinearGradient 
      style={[styles.button, style]} 
      start={{ x: 0.75, y: 0.25 }} 
      end={{x: 0.25, y: 0.75}} 
      colors={gradientColors} 
      locations={[0, 0.25, 0.5, 0.75]}
    >
      { children }
    </LinearGradient>
  </TouchableOpacity>
)