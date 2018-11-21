import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { DBCard, DBImage } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { HttpService, UserService } from '../../../services'
import styles from './style'

const userService = new UserService()

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      following: false,
    }
  }

  follow = async () => {
    const userId = this.props.user._id
    userService.follow(userId)
    this.props.getLoggedUser().following.push(userId)
    this.setState({ following: true })
  }

  render() {
    const { user, getLoggedUser } = this.props
    const { following } = this.state
    const loggedUser = getLoggedUser()
    const loggedUserId = loggedUser._id

    const imageUrl = userService.getUserImage(user._id)
    const isLoggedUser = user._id === loggedUserId

    if(!isLoggedUser) {
      const isOnFollowers = user.followers.find(userId => userId === loggedUserId)
      const isOnFollowing = loggedUser.following.find(userId => userId === user._id)
      if ((isOnFollowers || isOnFollowing) && !following) {
        this.setState({ following: true })
      }
    }

    const followText = following ? 'SEGUINDO' : 'SEGUIR'

    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.userDetailWrapper}>
          <DBImage uri={imageUrl} style={styles.userImage} />

          <Text style={styles.userName}>{ user.name }</Text>
          
          <View style={{ flex: 1 }}>
            { isLoggedUser
              ? (
                  <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => {}}>
                      <Icon name="edit" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        HttpService.removeToken()
                        this.props.setLogged(false)
                      }
                    }>
                      <Icon name="sign-out-alt" size={25} />
                    </TouchableOpacity>
                  </View>
              )
            : (
                <TouchableOpacity onPress={this.follow}>
                  <View style={[{ flexShrink: 1, marginTop: 15, borderWidth: 1, borderColor: '#999', backgroundColor: following ? '#8E39AA' : '#fff', padding: 5, borderRadius: 5}]}>
                      <Text style={{ color: following ? '#fff' : '#8E39AA', fontSize: 16, textAlign: 'center' }}>{followText}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          </View>
        </View>

        <View style={styles.feedWrapper}>
            {/* { user.posts } */}
        </View>
      </ScrollView>
    )
  }
}