import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { RootScreen } from './src/ui/screens'

const { height } = Dimensions.get('window')

import Reactotron from 'reactotron-react-native'

Reactotron.configure()
  .useReactNative()
  .connect()

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, height }}>
          <RootScreen />
      </View>
    )
  }
}