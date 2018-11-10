import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { DBButton } from '../button'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './style'

const renderImage = (images, active) => {
  const image = active ? images.ACTIVE : images.NORMAL

  return (
    <Image source={image} style={images.style} />
  )
}

export const DBMenu = ({ menus, onMenuOptionPress, activeMenuId }) => (
  <View style={styles.wrapper}>
    <View style={styles.buttonWrapper}>
      <DBButton onPress={() => alert('oi')} style={styles.button}>
        <Text style={styles.buttonContent}>+</Text>
      </DBButton>
    </View>
    <View style={styles.options}>
      { menus.map(option => {
          const isActiveMenu = option.id === activeMenuId 

          const shouldRenderImages = !!option.images

          return (
            <TouchableOpacity key={option.id} onPress={() => onMenuOptionPress(option)} activeOpacity={1} style={styles.option}>
              { shouldRenderImages 
                ? renderImage(option.images, isActiveMenu)
                : <Icon style={isActiveMenu && styles.active} size={25} name={option.icon} />
              }
              <Text style={isActiveMenu && styles.active}>{option.label}</Text>
            </TouchableOpacity>
        )})
      }
    </View>
  </View>
)