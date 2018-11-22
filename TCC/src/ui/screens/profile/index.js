import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { DBImage, DBScreenWrapper } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { HttpService, UserService } from '../../../services'

import { Feed } from '../feed'
import { SignUpScreen } from '../sign-up'

import styles from './style'

const userService = new UserService()

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      following: false,
      posts: [],
      editModal: false,
    }
  }


  getFeed = () => {
    userService.getUserPosts(this.props.user._id)
      .then(result => this.setState({ posts: result.data }))
  }

  componentDidMount() {
    this.getFeed()
    this.setState({ user: this.props.user })
  }

  follow = async () => {
    const userId = this.props.user._id
    userService.follow(userId)
    this.props.loggedUser.following.push(userId)
    this.setState({ following: true })
  }

  closeModal = () => {
    this.setState({ editModal: false })
  }

  updateUser = () => {
    userService.getUser(this.props.user._id)
      .then(result => {
        this.props.setLogged(true, result.data)
        this.setState({ user: result.data })
        this.closeModal()
      })
  }

  render() {
    const { loggedUser } = this.props
    const { following, posts, user } = this.state
    const loggedUserId = loggedUser._id

    if(!user) {
      return <View />
    }

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
      <React.Fragment>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.userDetailWrapper}>
            <DBImage uri={imageUrl} style={styles.userImage} />

            <Text style={styles.userName}>{ user.name }</Text>
            
            <View style={{ flex: 1 }}>
              { isLoggedUser
                ? (
                    <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                      <TouchableOpacity onPress={() => this.setState({ editModal: true })}>
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
            <Feed posts={posts} loggedUser={loggedUser} getFeed={this.getFeed} />
          </View>
        </ScrollView>
        <DBScreenWrapper visible={this.state.editModal} onBack={this.closeModal}>
          <SignUpScreen onSubmit={this.updateUser} isEdit />
        </DBScreenWrapper>
      </React.Fragment>
    )
  }
}