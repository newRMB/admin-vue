import axios from 'axios'
import type, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
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
  Iloading: any
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
    //所有请求的拦截器
    this.instance.interceptors.request.use((config) => {
      this.Iloading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      return config
    })
    this.instance.interceptors.response.use((config) => {
      this.Iloading.close()
      return config
    })
  }
  get(url: string, config?: AxiosResponse) {
    this.instance.get(url, config)
  }
}
