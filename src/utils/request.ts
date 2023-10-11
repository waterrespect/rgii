import axios from "axios";
import { ElMessageBox, ElMessage } from 'element-plus'
import cookie from 'js-cookie'
import showMessage from './status'
//   vuex
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // token 先不处理，后续使用时在完善
    //  判斷cookie是否有token值
    if(cookie.get('token')) {
      //  token值放到cookie裏面
      config.headers['token'] = cookie.get('token')
    }
    return config
  },
  (error: any) => {
    console.log(error)
    return Promise.reject(error);
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */
  response => {
        if (response.data.code !== 200) {
            ElMessage({
                message: response.data.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(response.data)
        } else {
            return response.data
        }
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default service
