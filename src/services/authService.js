import axios from 'axios';
import { API } from '../constants';
import { postData } from '../utils/postData';

const url = `${API}/tokens`

const post = async (username, password) => {
  return await axios.post(url, postData({
    username,
    password
  }))
}

export default {
  post
}
