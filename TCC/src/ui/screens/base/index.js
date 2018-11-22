import React from 'react'
import { View } from 'react-native'

import { LoggedScreen, LoginScreen } from '../../screens'
import { StorageService, UserService, HttpService } from '../../../services'

import moment from 'moment'

const userService = new UserService()

export class RootScreen extends React.Component {
  state = {
    logged: undefined,
    user: null,
  }

  setLogged = (logged, user) => {
    this.setState({ logged, user })
  } 

  async componentDidMount() {
    const [token, userId, expireDate] = await Promise.all([
      StorageService.getString(HttpService.AUTHORIZATION_NAME),
      StorageService.getString(HttpService.USER_ID),
      StorageService.getString(HttpService.EXPIRE_DATE),
    ])

    const newState = {
      logged: !!token && moment(expireDate) > moment(),
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
      loggedUser: this.state.user,
    }

    return (
      logged
        ? <LoggedScreen { ...screenProps } />
        : <LoginScreen { ...screenProps } />
    )
  }
}