import {
  ADMIN_API
} from '../constants';
import rest from '../utils/rest';

const admin_url = `${ADMIN_API}/user`

const all = async (adminId, token) => {
  return await rest(adminId, token).get(admin_url)
}

const get = async (adminId, token, userId) => {
  return await rest(adminId, token).get(`${admin_url}/usreId`)
}

export default {
  all,
  get
}
