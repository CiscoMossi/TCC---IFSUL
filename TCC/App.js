/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DBSafeAreaView, DBCard } from './src/ui/components'

export default class App extends Component {
  render() {
    return (
      <DBSafeAreaView>
        <View style={styles.container}>
          <DBCard />
        </View>
      </DBSafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
})
