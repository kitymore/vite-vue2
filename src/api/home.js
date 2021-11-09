import api from './base'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
    return request({
      url: api.Login,
      method: 'post',
      data
    })
  }
