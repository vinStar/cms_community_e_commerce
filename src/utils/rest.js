/**
 * 封装axios 新增头部添加authorization的方法
 */
import axios from 'axios';
import { authorization } from './authorization';

const rest = (adminId, token) => {
  return axios.create({
    headers: {
      'authorization': authorization(adminId, token)
    }
  })
}

export default rest
