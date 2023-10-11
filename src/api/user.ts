import request from '@/utils/request'
import { loginForm } from '../api/model/user_class'

const api_name = `/api/login`

export async function login(data: loginForm) {
  return request({
    url: `${api_name}/login`,
    method: 'post',
    data,
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/register',
    method: 'post',
  })
}
