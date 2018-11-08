import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'

const TextContent = ({ text }) => (
  <Text style={styles.textContent}>{ text }</Text>
)

const Options = ({  }) => (
  <View style={styles.options}>
    <View style={styles.option}>
      <Icon size={25} name="hand-o-up" />
      <Text style={styles.optionValue}>10</Text>
    </View>
    <View style={styles.option}>
      <Icon size={25} name="hand-o-up" />
      <Text style={styles.optionValue}>10</Text>
    </View><View style={styles.option}>
      <Icon size={25} name="hand-o-up" />
      <Text style={styles.optionValue}>10</Text>
    </View>
  </View>
)

export const DBCard = ({ props }) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <TextContent text="Conteudo do card contando minha experiencia com meditação" />
    </View>
    <Options />
  </View>
)