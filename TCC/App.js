import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { DBSafeAreaView, DBHeader ,DBMenu } from './src/ui/components'
import { HomeScreen } from './src/ui/screens'

const menuItems = [
  { 
    id: 0, 
    icon: 'bug', 
    label: 'Batata',
    title: 'Home',
    content: <HomeScreen />,
  }, 
  { 
    id: 1, 
    icon: 'bug', 
    label: 'Batata', 
    title: 'Teste',
  },
  { 
    id: 2, 
    icon: 'bug', 
    label: 'Batata', 
    title: 'Teste',
  },
  { 
    id: 3, 
    icon: 'bug', 
    label: 'Batata', 
    title: 'Teste',
  },
]

export default class App extends Component {
  state = {
    currentMenu: menuItems[0]
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DBHeader title={this.state.currentMenu.title} />
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
