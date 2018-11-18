import { BaseService } from '../base'

export class UserService extends BaseService {
  constructor() {
    super('http://10.0.0.103:3000')
  }

  create(email, name, password) {
    return super.unauthenticatedPost('createUser', { user: { email, name, password }})
  }

  login(email, password) {
    return super.unauthenticatedPost('token', { email, password })
  }
}