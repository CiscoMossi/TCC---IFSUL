import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'

const TextContent = ({ text }) => (
  <Text style={styles.textContent}>{ text }</Text>
)

const Player = ({ link }) => (
  <View style={{ width: 250, height: 20, backgroundColor: 'red', padding: 4 }}>
    <View style={{ flex: 1, width: '50%', backgroundColor: 'blue' }} />
  </View>
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
      <Player />
      <TextContent text="Conteudo do card contando minha experiencia com meditação" />
    </View>
    <Options />
  </View>
)