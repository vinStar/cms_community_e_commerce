import {
  ADMIN_API
} from '../constants';
import rest from '../utils/rest';

const admin_url = `${ADMIN_API}/user`

const all = async (adminId, token) => {
  return await rest.get(adminId, token)(admin_url)
}

const get = async (adminId, token, userId) => {
  return await rest(adminId, token)(`${admin_url}/${userId}`)
}

export default {
  all,
  get
}
