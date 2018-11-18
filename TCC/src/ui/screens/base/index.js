import React from 'react'
import { View } from 'react-native'

import { LoggedScreen, LoginScreen } from '../../screens'
import { StorageService, HttpService } from '../../../services'

export class RootScreen extends React.Component {
  state = {
    logged: undefined,
  }

  setLogged = logged => {
    this.setState({ logged })
  } 

  componentDidMount() {
    StorageService.getString(HttpService.AUTHORIZATION_NAME)
      .then(token => {
        HttpService.registerToken(token)
        this.setState({ logged: !!token })
      })
  }

  render() {
    const { logged } = this.state
    if (logged === undefined) {
      return (
        <View style={{ flex: 1 }}>

        </View>
      )
    }

    return (


      logged
        ? <LoggedScreen setLogged={this.setLogged} />
        : <LoginScreen setLogged={this.setLogged} />
    )
  }
}