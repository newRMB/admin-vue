import axios from 'axios'
import type, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface myRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => void
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface IRequestConfig extends AxiosRequestConfig {
  Interceptor?: myRequestInterceptors
}
export default class MyRequest {
  instance: AxiosInstance
  Interceptor?: myRequestInterceptors
  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.Interceptor = config.Interceptor
    this.instance.interceptors.request.use(
      this?.Interceptor?.requestInterceptor,
      this?.Interceptor?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this?.Interceptor?.responseInterceptor,
      this?.Interceptor?.responseInterceptorCatch
    )
  }
  get(url: string, config?: AxiosResponse) {
    this.instance.get(url, config)
  }
}
