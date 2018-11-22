import { BaseService } from '../base'

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

  getUserPosts(userId) {
    return super.get(`user/posts/${userId}`)
  }

  getUserImage(id) {
    return `${this.baseUrl}/asset/${id}`
  }

  uploadUserImage(uri) {
    const formData = new FormData()
    
    formData.append('file', {
      uri,
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

  edit(email, name, password) {
    return super.post('user/update', { email, name, password })
  }

  login(email, password) {
    return super.unauthenticatedPost('token', { email, password })
  }
}