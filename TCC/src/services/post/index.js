import { BaseService } from '../base'
import { Platform } from 'react-native'
import fs from 'react-native-fs'

export class PostService extends BaseService {
  constructor() {
    super()
  }

  getFeed() {
    const query = { page: 1, limit: 999 }

    return super.get('feed', query)
  }

  like(id) {
    return super.post(`like/${id}`)
  }

  comment(id, content) {
    return super.post(`post/comment/${id}`, { content })
  }

  share(id) {
    return super.post(`post/share/${id}`)
  }

  createPost(title, content) {
    return super.post('regular_post', { post: { title, content }})
  }

  createMeditation(title) {
    return super.post('meditation', { post: { title }})
  }

  getMeditationAudio(id) {
    return `${this.baseUrl}/meditationAudio/${id}`
  }

  uploadMeditation({ id, path, name }) {
    const formData = new FormData()

    if (Platform.OS === 'ios') {
      const split = path.split('/')
      const dir = fs.DocumentDirectoryPath
      path = `${dir}/${split[split.length - 1]}`
    }
    
    formData.append('file', {
      uri: path,
      name: name,
      type: 'audio/aac'
    })

    const settings = { 
      headers: {
        'Content-Type': 'multipart/form-data'
      } 
    }

    return super.post(`meditationAudio/${id}`, formData, settings)
  }
}