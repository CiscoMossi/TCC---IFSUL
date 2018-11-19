import React from 'react'
import { View } from 'react-native'

import { LoggedScreen, LoginScreen } from '../../screens'
import { StorageService, UserService, HttpService } from '../../../services'

const userService = new UserService()

export class RootScreen extends React.Component {
  state = {
    logged: undefined,
    user: null,
  }

  setLogged = logged => {
    this.setState({ logged })
  } 

  getLoggedUser = () => this.state.user

  async componentDidMount() {
    const [token, userId] = await Promise.all([
      StorageService.getString(HttpService.AUTHORIZATION_NAME),
      StorageService.getString(HttpService.USER_ID)
    ])

    const newState = {
      logged: !!token,
    }

    if (userId) {
      const result = await userService.getUser(userId)
      newState.user = result.data
    }

    this.setState(newState)
  }

  render() {
    const { logged } = this.state
    if (logged === undefined) {
      return (
        <View style={{ flex: 1 }} />
      )
    }

    const screenProps = {
      setLogged: this.setLogged,
      getLoggedUser: this.getLoggedUser,
    }

    return (
      logged
        ? <LoggedScreen { ...screenProps } />
        : <LoginScreen { ...screenProps } />
    )
  }
}