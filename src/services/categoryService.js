import {
  ADMIN_API,
  USER_API
} from '../constants';
import axios from 'axios';
import {
  rest,
  postData
} from '../utils';

const admin_category = `${ADMIN_API}/categories`;
const user_category = `${USER_API}/categories`;

const all = async (page, rows) => {
  if (page && rows ) {
    return await axios.get(user_category, {
      params: {
        page,
        rows
      }
    })
  } else {
    return await axios.get(user_category)
  }
}

const post = async (adminId, token, categoryName) => {
  return rest.post(adminId, token)(admin_category,
    postData({
      categoryName
    })
  )
}

// const patch = async (adminId, token, categoryName) =>{
//   return rest(adminId, token).patch()
// }

export default {
  all
}
