import React from 'react'
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { gradientColors } from '../default'
import styles from './style'
import { DBRecorder, DBPlayer } from '../../components'
import { getCurrentTime } from '../../../core'

const Button = ({ onPress, text, color }) => (
  <TouchableOpacity 
    style={[styles.actionButtonWrapper, { backgroundColor: color }]} 
    onPress={onPress}
  >
    <Text style={styles.actionButtonText}>{ text }</Text>
  </TouchableOpacity>
)

export class RecordScreen extends React.Component {
  state = {
    recording: false,
    currentTime: 0,
    confirmAudio: false,
  }

  handleOnProgress = ({ currentTime }) => {
    if(currentTime > 0) {
      this.setState({ currentTime })
    }
  }

  recorder = new DBRecorder(this.handleOnProgress)

  handleRecording = async () => {
    const { recording, currentTime } = this.state

    if (!recording) {
      await this.recorder.record()
    } else {
      this.path = await this.recorder.stop()
    }

    const newState = {
      currentTime: !recording ? currentTime : 0,
      recording: !recording,
      confirmAudio: recording,
    }

    this.setState(newState)
  }

  onConfirm = async () => {
    const formData = new FormData()

    formData.append('audio', {
      uri: this.path,
      name: 'teste.aac',
      type: 'audio/x-aac'
    })

    //send to api
  }

  handleAction = async (confirm) => {
    confirm && await this.onConfirm()

    this.recorder.deleteAudio()
    this.setState({ confirmAudio: false })
  }

  renderRecorder = () => {
    const { recording, currentTime } = this.state

    let iconName = 'microphone'
    let action = 'gravar'

    if (recording) {
      iconName = 'stop'
      action = 'parar a gravação'
    }

    const duration = getCurrentTime(currentTime)
    
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Aperte para {action}</Text>
    
        <TouchableWithoutFeedback onPress={this.handleRecording}>
          <LinearGradient 
            style={styles.ball}
            start={{ x: 0.75, y: 0.25 }} 
            end={{x: 0.25, y: 0.75}} 
            locations={[0, 0.25, 0.5, 0.75]}
            colors={gradientColors} 
          >
            <Icon name={iconName} size={110} color="#fff" />
          </LinearGradient>
        </TouchableWithoutFeedback>
    
        <Text style={styles.text}>{ duration }</Text>
      </View>
    )
  }

  renderConfirmBox = () => (
    <View style={[styles.wrapper, { paddingHorizontal: 20 }]}>
      <DBPlayer link={this.path} />
      <View style={styles.actionButtonsContainer}>
        <Button text="CANCELAR" color="#dd4444" onPress={() => this.handleAction()} />
        <Button text="CONFIRMAR" color="#007f57" onPress={() => this.handleAction(true)} />
      </View>
    </View>
  )

  render() {
    return (    
      this.state.confirmAudio 
        ? this.renderConfirmBox() 
        : this.renderRecorder()
    )
  }
}