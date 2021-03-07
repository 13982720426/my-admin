import axios from 'axios'

//第一步 创建实例
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

//第二步 请求拦截
