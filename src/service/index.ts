import MyRequest from './request'

const request = new MyRequest({
  baseURL: 'www',
  timeout: 5000,
  Interceptor: {
    requestInterceptor: (config) => config,
    responseInterceptor: (config) => config
  }
})
export default request
