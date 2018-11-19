import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DBPlayer } from '../player'

import { HANG_LOOSE, LOGO } from '../../../../assets/images'
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
      <Image source={HANG_LOOSE.NORMAL} style={styles.hangLoose} />
      <Text style={styles.optionValue}>10</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onCommentPress} style={styles.option}>
      <Icon size={20} name="comment-alt" />
      <Text style={styles.optionValue}>10</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onSharePress} style={styles.option}>
      <Icon size={20} name="share" />
      <Text style={styles.optionValue}>10</Text>
    </TouchableOpacity>
  </View>
)

const PostInfo = ({ user, time }) => (
  <View style={styles.postInfoWrapper}>
    <View style={styles.userInfo}>
      <Image source={LOGO} style={styles.userImage} />
      <Text style={styles.userName}>Bork</Text>
    </View>
    <Text>12/07/2018 </Text>
  </View>
)

export const DBCard = ({ style, link, text, audioPercentage }) => (
  <View style={[styles.card, style]}>
    <PostInfo />
    <View style={styles.content}>
      { link 
        ? <DBPlayer audioPercentage={audioPercentage} link={link} />
        : <TextContent text={text} />
      }
    </View>
    <Options />
  </View>
)