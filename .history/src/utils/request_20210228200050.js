import axios from 'axios'

//第一步 创建实例
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
})

//第二步 请求拦截

//第三步 响应拦截
