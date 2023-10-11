import request from '@/utils/request'
import type { loginForm } from '../model/user_class'

const api_name = `/api/login`

export default {
  login(data: loginForm) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data,
    })
  },

  logout() {
    return request({
      url: '/logout',
      method: 'post',
    })
  },

  register() {
    return request({
      url: '/register',
      method: 'post',
    })
  }
}
