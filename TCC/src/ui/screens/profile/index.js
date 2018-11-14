import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { DBCard } from '../../components'
import { LOGO } from '../../../../assets/images'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'

export const ProfileScreen = ({ user }) => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.userDetailWrapper}>
        <Image source={LOGO} style={styles.userImage} />

        <Text style={styles.userName}>Bork</Text>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="edit" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.feedWrapper}>
        <DBCard link audioPercentage="70%" />
        <DBCard text="Um dia eu estava passando por um grande problema com um bug e já estava completamente irado com a situação. Nada que eu tentava resolvia. Pratiquei aquilo que chamam de 'Meditation in a moment'. Cara, minha cabeça se abriu, diversas outras ideias. Não demorou muito e resolvi o problema." />
        <DBCard link audioPercentage="70%" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
        <DBCard text="Conteudo do card contando minha experiencia com meditação" />
      </View>
    </ScrollView>
  )
}