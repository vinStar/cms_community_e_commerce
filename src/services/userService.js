import { API } from '../constants';
import rest from '../utils/rest';

const url = `${API}/users`

const all = async (adminId, token) => {
  return await rest(adminId, token).get(url)
}

const get = async (adminId, token, userId) => {
  return await rest(adminId, token).get(`${url}/usreId`)
}

export default {
  all,
  get
}
