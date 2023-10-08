import axios from 'axios'
import { ElNotification, ElMessageBox, ElMessage, ElLoading } from 'element-plus'
//  store
//  token
import { config } from 'process'


//  Axios create
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
})

//  request 拦截器
service.interceptors.request.use((config) => {
    //  token
    //  重复提交
    //  请求携带token
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

//  response 拦截器
service.interceptors.response.use((response) => {
    //  200 
    //  错误信息
    //  
    return response
}, error => {
    console.log(error)
    Promise.reject(error)
})
