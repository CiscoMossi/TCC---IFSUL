import * as axios from 'axios'

import { StorageService } from '../../storage'

const httpClient = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export class HttpService {
  static AUTHORIZATION_NAME = 'x-access-token'

  static getHeader = key => {
    return httpClient.defaults.headers.common[key]
  }

  static setHeader = (key, value) => {
    httpClient.defaults.headers.common[key] = value
  }

  static deleteHeader = key => {
    HttpService.setHeader(key, '')
    delete httpClient.defaults.headers.common[key]
  }

  static registerToken(token) {
    StorageService.setString(HttpService.AUTHORIZATION_NAME, token)
    HttpService.setHeader(HttpService.AUTHORIZATION_NAME, token)
  }

  static removeToken() {
    
  }

  static authorizedRequest = async ({ headers = {}, ...object }) => {
    const token = await StorageService.getString(HttpService.AUTHORIZATION_NAME)
    headers[HttpService.AUTHORIZATION_NAME] = token

    return HttpService.request({ headers, ...object })
  }

  static request = ({ method, url, data, queryString, headers, ...config }) => {
    const getUrlString = string => {
      return encodeURIComponent(string)
    }
  
    const jsonToQueryString = json => {
      return Object.entries(json)
        .map(entrie => entrie.map(getUrlString).join('='))
        .join('&')
    }

    if (queryString) {
      url = `${url}?${jsonToQueryString(queryString)}`
    }

    return httpClient.request({
      url,
      method,
      data,
      headers,
      ...config
    })
  }
}