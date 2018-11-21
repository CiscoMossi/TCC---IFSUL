import { HttpService } from '../http'

export class BaseService {
  constructor(baseUrl = 'http://10.0.0.104:3000') {
    this.baseUrl = baseUrl
  }

  mountUrl(url, useRawUrl) {
    if (useRawUrl) return url

    const composeUrl = url ? `/${url}` : ''

    return `${this.baseUrl}${composeUrl}`
  }

  get(url, queryString, settings = {}) {
    return HttpService
      .authorizedRequest({ 
        method: 'get',
        url: this.mountUrl(url, settings.useRawUrl), 
        queryString, 
        ...settings
      })
  }

  delete(url, id, settings = {}) {
    if (!settings.useRawUrl) url = `${this.mountUrl(url)}/${id}`

    return HttpService
      .authorizedRequest({ 
        method: 'delete',
        url, 
        ...settings,
      })
  }

  post(url, data, settings = {}) {
    return HttpService
      .authorizedRequest({ 
        method: 'post',
        url: this.mountUrl(url, settings.useRawUrl), 
        data, 
        ...settings,
      }) 
  }

  put(url, data, settings = {}) {
    return HttpService
      .authorizedRequest({ 
        method: 'put',
        url: this.mountUrl(url, settings.useRawUrl), 
        data, 
        ...settings,
      })
  }

  unauthenticatedPost(url, data, settings = {}) {
    return HttpService
      .request({ 
        method: 'post',
        url: this.mountUrl(url, settings.useRawUrl), 
        data, 
        ...settings,
      })
  }
}
