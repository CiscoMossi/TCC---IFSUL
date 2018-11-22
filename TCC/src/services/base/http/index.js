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
  static USER_ID = 'id'
  static EXPIRE_DATE = 'EXPIRE DATE'

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

  static registerToken(token, id, expireDate) {
    StorageService.setString(HttpService.AUTHORIZATION_NAME, token)
    StorageService.setString(HttpService.USER_ID, id)
    StorageService.setString(HttpService.EXPIRE_DATE, expireDate)
  }

  static removeToken() {
    StorageService.remove(HttpService.AUTHORIZATION_NAME)
    StorageService.remove(HttpService.USER_ID)
    StorageService.remove(HttpService.EXPIRE_DATE)
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