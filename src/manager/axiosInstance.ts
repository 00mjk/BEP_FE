import { devToolsDefaultConfig } from '@constants/defaultConfigs'
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

const getServerUrl = () => devToolsDefaultConfig?.server

class RequestManager {
  private static instance: AxiosInstance

  static getCreateInstance(): AxiosInstance {
    if (RequestManager.instance) {
      return RequestManager.instance
    }

    const serverUrl = getServerUrl()
    const axiosInstance = axios.create({ baseURL: `${serverUrl}` })

    axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
      const requestConfig = config

      const idToken = localStorage.getItem('accessToken')

      if (!requestConfig.headers.has('Content-Type')) {
        requestConfig.headers.set({
          'Content-Type': 'application/json',
        })
      }

      requestConfig.headers.set({
        Accept: 'application/json',
        Authorization: `Bearer ${idToken}`,
      })

      return requestConfig
    })

    RequestManager.instance = axiosInstance

    return axiosInstance
  }
}

export const Axios = () => RequestManager.getCreateInstance()
