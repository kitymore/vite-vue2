import api from './base';
// axios
import request from '@/utils/request';

// 登录
export function getUserInfo(data) {
  return request({
    url: api.Login,
    method: 'post',
    data,
  });
}

export function getwxConfig(data) {
  return request({
    url: api.wxconfig,
    method: 'get',
    data,
  });
}
