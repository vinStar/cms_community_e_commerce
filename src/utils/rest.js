/**
 * 封装axios 新增头部添加authorization的方法
 */
import axios from 'axios';
import { authorization } from './authorization';

const post = (adminId, token) => {
  return function (url, data) {
    return axios.create({
      headers: {
        'authorization': authorization(adminId, token)
      }
    }).post(url, data)
  }
}

const patch = (adminId, token) => {
  return function (url, data) {
    return axios.create({
      headers: {
        'authorization': authorization(adminId, token),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).patch(url, data)
  }
}

const get = (adminId, token) => {
  return function (url, params) {
    return axios.create({
      headers: {
        'authorization': authorization(adminId, token)
      }
    }).get(url, {
      params
    })
  }
}

export default {
  post,
  patch,
  get
}
