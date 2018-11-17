import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { DBSafeAreaView, DBMenu, DBModal } from '../../components'
import { HomeScreen } from '../home'
import { ProfileScreen } from '../profile'
import { BreatheScreen } from '../breathe'
import { SearchScreen } from '../search'
import { RecordScreen } from '../record'

import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'

import { BREATHE } from '../../../../assets/images'

const menuItems = [
  { 
    id: 0, 
    icon: 'home', 
    label: 'Home',
    title: 'Home',
    content: <HomeScreen />,
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
    content: <BreatheScreen />
  },
  { 
    id: 2, 
    icon: 'search', 
    label: 'Encontrar', 
    title: 'Encontrar',
    content: <SearchScreen />
  },
  { 
    id: 3, 
    icon: 'user', 
    label: 'Perfil', 
    title: 'Perfil',
    content: <ProfileScreen />
  },
]

export class LoggedScreen extends Component {
  state = {
    currentMenu: menuItems[0],
    modal: null,
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
          menus={menuItems} 
          onLeftButtonOptionPress={() => this.setState({ modal: <RecordScreen /> })}
          onRightButtonOptionPress={() => {}}
        />
        <DBModal isVisible={!!this.state.modal}>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.back} onPress={() => this.setState({ modal: null })}>
              <Icon name="long-arrow-alt-left" size={50} style={styles.icon} />
            </TouchableOpacity>
            { this.state.modal }
          </View>
        </DBModal>
      </View>
    )
  }
} 
