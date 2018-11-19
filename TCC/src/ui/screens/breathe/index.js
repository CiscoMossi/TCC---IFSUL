import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { gradientColors } from '../default'
import styles from './style'

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

export class BreatheScreen extends React.Component {
  state = {
    scaleAnimation: new Animated.Value(1),
    animating: false,
    actionText: ''
  }

  handlePress = () => {
    const { animating } = this.state

    this.setState({ animating: !animating }, () => {
      if (animating) {
        this.animation.stop()
      } else if (!this.animation) {
        this.animate()
      }
    })
  }

  animate = () => {
    if (this.state.animating && !this.animation) {
      this.animation = Animated.timing(this.state.scaleAnimation, {
        delay: 500,
        toValue: 1.4,
        duration: 3000,
      })

      this.setState({ actionText: 'INSPIRA' })
      this.animation.start(() => {
        this.setState({ actionText: 'SEGURA' })
  
        setTimeout(() => this.setState({ actionText: 'EXPIRA' }), 2000)
        
        this.animation = Animated.timing(this.state.scaleAnimation, {
          delay: 2000,
          toValue: 1,
          duration: 2500,
        })

        this.animation.start(() => {
          this.setState({ actionText: '' })
          this.animation = null
          if (this.state.animating) {
            this.animate()
          }
        })
      })

    } else if (this.animation) {
      this.state.scaleAnimation.setValue(1)
      this.animation.reset()
      this.setState({ actionText: '' })
    }
  }

  render() {
    const text = this.state.animating ? 'Aperte para parar' : 'Aperte para começar'

    return (
      <View style={styles.wrapper}>
        <Text style={styles.description}>{ text }</Text>

        <TouchableWithoutFeedback onPress={this.handlePress}>
          <AnimatedGradient 
            style={[styles.ball, { transform: [{ scale: this.state.scaleAnimation }] }]}
            start={{ x: 0.75, y: 0.25 }} 
            end={{x: 0.25, y: 0.75}} 
            locations={[0, 0.25, 0.5, 0.75]}
            colors={gradientColors} 
          >
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#fff' }}>{ this.state.actionText }</Text>
          </AnimatedGradient>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}