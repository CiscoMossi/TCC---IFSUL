import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { DBSafeAreaView, DBMenu, DBModal } from '../../components'
import { HomeScreen } from '../home'
import { ProfileScreen } from '../profile'
import { BreatheScreen } from '../breathe'
import { SearchScreen } from '../search'
import { RecordScreen } from '../record'
import { CreatePostScreen } from '../create-post'

import { PostService } from '../../../services'

import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'

import { BREATHE } from '../../../../assets/images'

const postService = new PostService()

const getMenuItems = props => [
  { 
    id: 0, 
    icon: 'home', 
    label: 'Home',
    title: 'Home',
    content: <HomeScreen { ...props } />,
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
    content: <BreatheScreen { ...props } />
  },
  { 
    id: 2, 
    icon: 'search', 
    label: 'Encontrar', 
    title: 'Encontrar',
    content: <SearchScreen { ...props } />
  },
  { 
    id: 3, 
    icon: 'user', 
    label: 'Perfil', 
    title: 'Perfil',
    content: <ProfileScreen { ...props } />
  },
]

export class LoggedScreen extends Component {
  state = {
    currentMenu: getMenuItems(this.props)[0],
    modal: null,
  }

  createPost = (title, content) => {
    postService.createPost(title, content)
      .then(result => {
        this.setState({ modal: null })
      })
  }

  createMeditation = async (title, path, name) => {
    const { data } = await postService.createMeditation(title)
    const result = await postService.uploadMeditation({ path, name })
    this.setState({ modal: null })

    return
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DBSafeAreaView>
          <View style={styles.container}>
            { this.state.currentMenu.content }
          </View>
        </DBSafeAreaView>
        <DBMenu 
          onMenuOptionPress={option => this.setState({ currentMenu: option })} 
          activeMenuId={this.state.currentMenu.id} 
          menus={getMenuItems(this.props)} 
          onLeftButtonOptionPress={() => this.setState({ modal: <RecordScreen onConfirm={this.createMeditation} /> })}
          onRightButtonOptionPress={() => this.setState({ modal: <CreatePostScreen submit={this.createPost} /> })}
        />
        <DBModal isVisible={!!this.state.modal}>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.back} onPress={() => this.setState({ modal: null })}>
              <Icon name="arrow-left" size={30} style={styles.icon} />
            </TouchableOpacity>
            { this.state.modal }
          </View>
        </DBModal>
      </View>
    )
  }
} 
