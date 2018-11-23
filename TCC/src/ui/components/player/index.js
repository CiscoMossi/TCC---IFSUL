import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DBButton } from '../button'

import styles from './style'

import Sound from 'react-native-sound'

export class DBPlayer extends Component {
  state = {
    sound: null,
    playing: false,
    audioPercentage: 0
  }

  play = () => {
    this.state.sound.play(success => {
      if (success) {
        clearInterval(this.interval)
        this.state.sound.setCurrentTime(0)
        this.setState({ playing: false, audioPercentage: 0, sound: null })
        return
      }
    })

    this.interval = setInterval(() => {
      this.state.sound.getCurrentTime(currentTime => {
        if(this.state.sound) {
          const audioPercentage = currentTime/this.state.sound.getDuration()*100
  
          this.setState({ audioPercentage })
        }
      })
    })
  }

  handlePlay = () => {
    setTimeout(() => {
      if (Platform.OS === 'ios') {
        Sound.enable(true);
      }

      if (this.state.sound) {
        this.play()
        return
      }

      const sound = new Sound(this.props.link, '', (error) => {
        if (error) {
          alert(error)
        } else {
          this.state.sound.setVolume(1)
          this.play()
        }
      })

      this.setState({ sound })
    }, 100)
  }

  handlePause = () => {
    this.state.sound.pause()
    clearInterval(this.interval)
  }

  handlePlayButton = () => {
    if (!this.state.playing) {
      this.handlePlay()
    } else {
      this.handlePause()
    }

    this.setState({ playing: !this.state.playing })
  }

  render() {
    const { playing, audioPercentage } = this.state

    const iconName = playing ? "stop" : "play"

    return (
      <View style={styles.wrapper}>
        <View style={styles.percentage}>
          <View style={[styles.innerPercentage, { width: `${audioPercentage}%` }]}>
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