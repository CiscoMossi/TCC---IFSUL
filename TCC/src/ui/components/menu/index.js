import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'

export const DBMenu = ({ menus, onMenuOptionPress, activeMenuId }) => (
  <View style={styles.container}>
    { menus.map(option => {
        const isActiveMenu = option.id === activeMenuId 

        return (
          <TouchableOpacity onPress={() => onMenuOptionPress(option)} activeOpacity={1} style={styles.option}>
            <Icon style={isActiveMenu && styles.active} size={25} name={option.icon} />
            <Text style={isActiveMenu && styles.active}>{option.label}</Text>
          </TouchableOpacity>
      )})
    }
  </View>
)