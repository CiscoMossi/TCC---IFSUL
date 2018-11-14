import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { DBSafeAreaView, DBMenu } from '../../components'
import { HomeScreen } from '../home'
import { ProfileScreen } from '../profile'
import { BreatheScreen } from '../breathe'
import { SearchScreen } from '../search'

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
    currentMenu: menuItems[0]
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
        />
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
})
