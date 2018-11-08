import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export class DBSafeAreaView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    // TODO: Fix padding on IOS devices paddingTop: Platform.OS === 'android' ? 0 : 20,
  },
})
