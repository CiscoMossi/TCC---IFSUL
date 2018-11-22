import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DBPlayer } from '../player'
import { DBImage } from '../image'

import { HANG_LOOSE } from '../../../../assets/images'
import styles from './style'

import moment from 'moment'

import { UserService } from '../../../services'

const userService = new UserService()

const TextContent = ({ text }) => (
  <Text style={styles.textContent}>{ text }</Text>
)

class Options extends React.Component {
  state = {
    liked: false
  }

  render() {
    const { postId, likes, comments, userId, onLike, onComment, onShare } = this.props
    const liked = likes.map(({ user }) => user).includes(userId)

    return (
      <View style={styles.options}>
        <TouchableOpacity onPress={() => onLike(postId)} style={styles.option}>
          <Image source={liked ? HANG_LOOSE.ACTIVE : HANG_LOOSE.NORMAL} style={styles.hangLoose} />
          <Text style={styles.optionValue}>{likes.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onComment(postId)} style={styles.option}>
          <Icon size={20} name="comment-alt" />
          <Text style={styles.optionValue}>{comments.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShare(postId)} style={styles.option}>
          <Icon size={20} name="share" />
        </TouchableOpacity>
      </View>
    )
  }
}

const PostInfo = ({ user, date }) => {
  const time = moment(date).format('DD/MM/YYYY HH:mm')

  const imageUrl = userService.getUserImage(user._id)

  return (
    <View style={styles.postInfoWrapper}>
      <View style={styles.userInfo}>
        <DBImage uri={imageUrl} style={styles.userImage}  />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <Text>{time}</Text>
    </View>
  )
}

export const DBCard = ({ style, link, text, title, user, date, id, likes, comments, onLike, onComment, onShare, sharedPost }) => {
  if (!!sharedPost) {
    text = sharedPost.content
  }

  return (
    <View style={[styles.card, style]}>
      { !!sharedPost && <Text style={{ fontSize: 15, marginBottom: 10 }}>Compartilhado por {user.name} </Text> }
      <PostInfo user={sharedPost ? sharedPost.user : user} date={date} />
      <View style={styles.content}>
        { title && <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>{title}</Text> }
        { link 
          ? <DBPlayer link={link} />
          : <TextContent text={text} />
        }
      </View>
      <Options likes={likes} comments={comments} onLike={onLike} onComment={onComment} onShare={onShare} userId={user._id} postId={id} />
    </View>
  )
}