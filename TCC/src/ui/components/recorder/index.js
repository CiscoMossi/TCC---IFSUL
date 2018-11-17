import { AudioRecorder, AudioUtils } from 'react-native-audio'
import moment from 'moment'
import Permissions from 'react-native-permissions'

import fs from 'react-native-fs'

export class DBRecorder {
  constructor(onProgress) {
    AudioRecorder.onProgress = onProgress
  }
  
  prepareRecording() {
    this.recordingName = moment().format('YYYYMMDDHHmmss') + '.aac'
    this.audioPath = AudioUtils.DocumentDirectoryPath + '/' + this.recordingName
    AudioRecorder.prepareRecordingAtPath(this.audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: 'Low',
      AudioEncoding: 'aac',
      AudioEncodingBitRate: 32000
    })
  }

  record = async () => {
    const result = await Permissions.request('microphone')
    if (result === 'authorized') {
      this.prepareRecording()
      await AudioRecorder.startRecording()
    } else {
      alert('Permissão de microfone é necessária para gravar as meditações.')
    }
  }

  //returns file path
  async stop() {
    await AudioRecorder.stopRecording()
    return this.audioPath
  }

  async deleteAudio() {
    return await fs.unlink(this.audioPath)
  }
}