import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DBPlayer } from '../player'

import styles from './style'

const TextContent = ({ text }) => (
  <Text style={styles.textContent}>{ text }</Text>
)

onLikePress = () => {}
onCommentPress = () => {}
onSharePress = () => {}

const Options = ({  }) => (
  <View style={styles.options}>
    <TouchableOpacity onPress={onLikePress} style={styles.option}>
      <Icon size={25} name="hand-o-up" />
      <Text style={styles.optionValue}>10</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onCommentPress} style={styles.option}>
      <Icon size={25} name="hand-o-up" />
      <Text style={styles.optionValue}>10</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onSharePress} style={styles.option}>
      <Icon size={25} name="hand-o-up" />
      <Text style={styles.optionValue}>10</Text>
    </TouchableOpacity>
  </View>
)

export const DBCard = ({ link, text }) => (
  <View style={styles.card}>
    <View style={styles.content}>
      { link 
        ? <DBPlayer link={link} />
        : <TextContent text={text} />
      }
    </View>
    <Options />
  </View>
)