import React, { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DBButton } from '../button'

import styles from './style'

export class DBPlayer extends Component {
  state = {
    playing: false,
  }

  handlePlayButton = () => this.setState({ playing: !this.state.playing })

  render() {
    const iconName = this.state.playing ? "stop" : "play"

    return (
      <View style={styles.wrapper}>
        <View style={styles.percentage}>
          <View style={[styles.innerPercentage, { width: this.props.audioPercentage }]}>
            <View style={styles.percentagePoint} />
          </View>
        </View>
        <DBButton 
          activeOpacity={.8} 
          onPress={this.handlePlayButton} 
          style={styles.playButton}
        >
          <Icon color="#FFFFFF" size={20} name={iconName} />
        </DBButton>
      </View>
    )
  }
}