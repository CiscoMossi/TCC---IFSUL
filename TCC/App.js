import React, { Component } from 'react'
import { View } from 'react-native'
import { LoggedScreen, SignUpScreen, LoginScreen } from './src/ui/screens'
export default class App extends Component {
  state = {
    logged: false,
  }

  componentDidMount() {
    this.setState({ logged: false })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.state.logged
          ? <LoggedScreen />
          : <LoginScreen />
        }
      </View>
    )
  }
}