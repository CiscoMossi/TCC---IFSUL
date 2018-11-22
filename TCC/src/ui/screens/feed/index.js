import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import { DBCard, DBModal, DBTextInput, DBImage } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { PostService, UserService } from '../../../services'

import moment from 'moment'

import styles from './style'

const postService = new PostService()
const userService = new UserService()

const Comment = ({ image, user, date, content }) => (
  <View style={{ borderBottomWidth: 1, borderBottomColor: '#ddd', padding: 10 }}>
    <View style={{ flexShrink: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <DBImage uri={image} style={{ height: 40, width: 40, borderRadius: 20, borderColor: '#ddd', borderWidth: 1 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>{ user }</Text>
      </View>
      <Text style={{ fontSize: 14, textAlign: 'right' }}>{ date }</Text>
    </View>
    <Text style={{ marginHorizontal: 5, fontSize: 15 }}>{ content }</Text>
  </View>
)

const SendIcon = ({ onSend }) => (
  <TouchableOpacity onPress={onSend} style={{ marginBottom: 10 }}>
    <Icon name="paper-plane" size={20} style={styles.icon} />
  </TouchableOpacity>
)

export class Feed extends Component {
  state = {
    commentModalOpened: false,
    currentPost: null,
    comment: '',
  }

  async componentDidMount() {
    await this.props.getFeed()
  }

  getUser = async id => {
    return await userService.getUser(id)
  }

  isLastCard = index => {
    return index === this.props.posts.length - 1
  }

  like = postId => {
    postService.like(postId)
      .then(this.props.getFeed)
  }

  share = postId => {
    postService.share(postId)
      .then(this.props.getFeed)
  }

  comment = () => {
    const { currentPost, comment } = this.state
    
    postService.comment(currentPost._id, comment)
      .then(result => {
        const newCurrentPost = currentPost
        newCurrentPost.comments.push({
          createdAt: moment(),
          user: this.props.loggedUser,
          content: this.state.comment
        })

        this.setState({ currentPost: newCurrentPost, comment: '' }, () => {
          this.input.clear()
          setTimeout(this.scrollview.scrollToEnd, 100)
        })
      })
  }

  showComments = postId => {
    const currentPost = this.props.posts.find(post => post._id === postId)

    this.setState({ commentModalOpened: true, currentPost })
  }

  closeCommentModal = async () => {
    await this.props.getFeed()
    this.setState({ commentModalOpened: false })
  }

  render() {
    const { currentPost } = this.state
    const { posts } = this.props
    
    return (
      <React.Fragment>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          { posts.length > 0 ?
              posts.map((post, index) => {
              const sharedPost = post.shared[0]

              const postProps = {
                id: post._id,
                text: post.content,
                user: post.user,
                date: post.createdAt,
                likes: post.likes,
                comments: post.comments,
                onLike: this.like,
                onComment: this.showComments,
                onShare: this.share,
                sharedPost
              }

              if (post.type === 'MEDITATION' || (sharedPost && sharedPost.type === 'MEDITATION')) {
                postProps.link = sharedPost ? postService.getMeditationAudio(sharedPost._id) : postService.getMeditationAudio(post._id)
                postProps.title = sharedPost ? sharedPost.title : post.title
              }

              return (
                <DBCard 
                  { ...postProps }
                  key={index}
                  style={this.isLastCard(index) && styles.lastItem}
                />
              )
            })
            : <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>Sem posts para você ver aqui :(</Text>
          }
        </ScrollView>
        { currentPost &&
          <DBModal animation="slideInUp" style={{ margin: 20, marginTop: 40 }} isVisible={this.state.commentModalOpened}>
            <View style={styles.modal}>
              <TouchableOpacity style={styles.back} onPress={this.closeCommentModal}>
                  <Icon name="times" size={30} style={styles.icon} />
                </TouchableOpacity>
              <ScrollView ref={r => this.scrollview = r} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View>
                  { currentPost.comments.map((comment, index) => {

                    const date = moment(comment.createdAt).format('DD/MM/YYYY HH:mm')
                    const userImage = userService.getUserImage(comment.user._id)

                    return (
                      <Comment image={userImage} user={comment.user.name} date={date} content={comment.content} key={index} />
                    )
                  }) }
                </View>
              </ScrollView>
              <DBTextInput 
                sectionStyle={{ flexShrink: 1, maxHeight: 65 }}
                containerStyle={{ 
                  marginHorizontal: 10, 
                  marginBottom: 10, 
                  maxHeight: 65, 
                  justifyContent: 'flex-end', 
                  flexShrink: 1, 
                  borderColor: '#ddd',
                  borderTopWidth: 2,
                }}
                inputStyle={{ 
                  alignSelf: 'flex-end',
                  textAlign: 'left'
                }}
                onFocusColor="#8E39AA" 
                onBlurBorderColor="#8E39AA"
                inputRef={r => this.input = r} 
                onChangeText={value => this.setState({ comment: value })} 
                value={this.state.comment}
                placeholder="Comente algo!"
                right={<SendIcon onSend={this.comment} />}
              />
            </View>
          </DBModal> 
        }
      </React.Fragment>
    )
  }
}