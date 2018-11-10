import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { DBSafeAreaView, DBHeader ,DBMenu } from './src/ui/components'
import { HomeScreen } from './src/ui/screens'

import { BREATHE } from './assets/images'

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
  },
  { 
    id: 2, 
    icon: 'search', 
    label: 'Encontrar', 
    title: 'Encontrar',
  },
  { 
    id: 3, 
    icon: 'user', 
    label: 'Perfil', 
    title: 'Perfil',
  },
]

export default class App extends Component {
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
