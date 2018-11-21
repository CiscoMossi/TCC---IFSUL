import { BaseService } from '../base'
import { Platform } from 'react-native'

export class UserService extends BaseService {
  constructor() {
    super()
  }

  follow(id) {
    return super.put(`follow/${id}`)
  }

  findByName(name) {
    return super.get(`user/name/${name}`)
  }

  getUser(id) {
    return super.get(`user/${id}`)
  }

  getUserImage(id) {
    return `${this.baseUrl}/asset/${id}`
  }

  uploadUserImage(path) {
    const formData = new FormData()

    if (Platform.OS === 'ios') {
      const split = path.split('/')
      const dir = fs.DocumentDirectoryPath
      path = `${dir}/${split[split.length - 1]}`
    }

    
    formData.append('file', {
      uri: path,
      name: 'profile.jpeg',
      type: 'image/jpeg'
    })

    const settings = { 
      headers: {
        'Content-Type': 'multipart/form-data'
      } 
    }

    return super.post('userProfile', formData, settings)
  }

  create(email, name, password) {
    return super.unauthenticatedPost('createUser', { user: { email, name, password }})
  }

  login(email, password) {
    return super.unauthenticatedPost('token', { email, password })
  }
}