import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { gradientColors } from '../default'
import styles from './style'
import { DBRecorder } from '../../components'

export class RecordScreen extends React.Component {
  state = {
    recording: false,
  }

  recorder = new DBRecorder()

  handleRecording = async () => {
    if (!this.state.recording) {
      await this.recorder.record()
    } else {
      const path = await this.recorder.stop()
      const formData = new FormData()

      formData.append('audio', {
        uri: path,
        name: 'teste.aac',
        type: 'audio/x-aac'
      })

      console.log(formData)

      //send to api
    }

    this.setState({ recording: !this.state.recording })
  }

  render() {
    const iconName = this.state.recording ? 'stop' : 'microphone'
    const action = this.state.recording ? 'parar a gravação' : 'gravar'

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

        <Text style={styles.text}>00:00</Text>
      </View>
    )
  }
}