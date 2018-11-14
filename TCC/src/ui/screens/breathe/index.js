import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { gradientColors } from '../default'
import styles from './style'

export class BreatheScreen extends React.Component {
  animation = new Animated.Value(1)

  scale = Animated.loop(
    Animated.timing(this.animation, {
      duration: 1000,
      toValue: 1.3
    })
  )

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.description}>Aperte para começar</Text>

        <TouchableWithoutFeedback onPress={this.animate}>
          <LinearGradient 
            style={styles.ball}
            start={{ x: 0.75, y: 0.25 }} 
            end={{x: 0.25, y: 0.75}} 
            locations={[0, 0.25, 0.5, 0.75]}
            colors={gradientColors} 
          >
            <Animated.View style={{ flex: 1, transform: [{ scale: this.animation }] }} />
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}