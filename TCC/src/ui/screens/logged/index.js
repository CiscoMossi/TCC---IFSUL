import React, { Component } from 'react'
import { View } from 'react-native'
import { DBSafeAreaView, DBMenu, DBScreenWrapper } from '../../components'
import { HomeScreen } from '../home'
import { ProfileScreen } from '../profile'
import { BreatheScreen } from '../breathe'
import { SearchScreen } from '../search'
import { RecordScreen } from '../record'
import { CreatePostScreen } from '../create-post'

import { PostService } from '../../../services'

import styles from './style'

import { BREATHE } from '../../../../assets/images'

const postService = new PostService()

const menuItems = [
  { 
    id: 0, 
    icon: 'home', 
    label: 'Home',
    title: 'Home',
    content: HomeScreen,
  }, 
  { 
    id: 1, 
    images: {
      ...BREATHE,
      style: {
        width: 35,
        height: 35,
      }
    },
    label: 'Respire', 
    title: 'Respire',
    content: BreatheScreen
  },
  { 
    id: 2, 
    icon: 'search', 
    label: 'Encontrar', 
    title: 'Encontrar',
    content: SearchScreen
  },
  { 
    id: 3, 
    icon: 'user', 
    label: 'Perfil', 
    title: 'Perfil',
    content: ProfileScreen
  },
]

export class LoggedScreen extends Component {
  state = {
    currentMenu: menuItems[0],
    modal: null,
    feed: [],
    update: false,
  }

  async componentDidMount() {
    await this.getFeed()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loggedUser.name !== this.props.loggedUser.name) {
      this.setState({ currentMenu: this.state.currentMenu })
    }
  }

  getFeed = async () => {
    const { _id } = this.props.loggedUser
    const result = await postService.getFeed(_id)
    this.setState({ feed: result.data.docs, update: !this.state.update })
  }

  createPost = async (title, content) => {
    postService.createPost(title, content)
    await this.getFeed()
    this.setState({ modal: null })
  }

  createMeditation = async (title, path, name) => {
    const { data } = await postService.createMeditation(title)
    const result = await postService.uploadMeditation({ id: data, path, name })
    await this.getFeed()
    this.setState({ modal: null })

    return
  }

  render() {
    const Content = this.state.currentMenu.content

    const contentProps = {
      ...this.props,
      user: this.props.loggedUser,
      feed: this.state.feed,
      refreshFeed: this.getFeed,
      update: this.state.update,
    }

    return (
      <View style={{ flex: 1 }}>
        <DBSafeAreaView>
          <View style={styles.container}>
            <Content { ...contentProps } />
          </View>
        </DBSafeAreaView>
        <DBMenu 
          onMenuOptionPress={option => this.setState({ currentMenu: option })} 
          activeMenuId={this.state.currentMenu.id} 
          menus={menuItems} 
          onLeftButtonOptionPress={() => this.setState({ modal: <RecordScreen onConfirm={this.createMeditation} /> })}
          onRightButtonOptionPress={() => this.setState({ modal: <CreatePostScreen submit={this.createPost} /> })}
        />
        <DBScreenWrapper visible={!!this.state.modal} onBack={() => this.setState({ modal: null })}>
          { this.state.modal }
        </DBScreenWrapper>
      </View>
    )
  }
} 
