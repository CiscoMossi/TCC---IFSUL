import { BaseService } from '../base'

export class UserService extends BaseService {
  constructor() {
    super()
  }

  getUser(id) {
    return super.get(`user/${id}`)
  }

  create(email, name, password) {
    return super.unauthenticatedPost('createUser', { user: { email, name, password }})
  }

  login(email, password) {
    return super.unauthenticatedPost('token', { email, password })
  }
}