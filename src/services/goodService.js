import {
  ADMIN_API,
  DEFAULT_PAGE,
  DEFAULT_ROWS
} from '../constants';
import rest from '../utils/rest';
import { postData } from '../utils/postData';

const admin_good = `${ADMIN_API}/goods`

const all = async (adminId, token, page = DEFAULT_PAGE, rows = DEFAULT_ROWS) => {
  return await rest.get(adminId, token)(admin_good, {
    params: {
      page,
      rows
    }
  })
}

const create = async (
  adminId,
  token,
  categoryId,
  goodName,
  price,
  originalPrice,
  inventory,
  spec,
  origin,
  imageFile
) => {
  return await rest.post(adminId, token)(
    admin_good,
    {
      categoryId,
      goodName,
      price,
      originalPrice,
      inventory,
      spec,
      origin,
      imageFile
    }
  )
}

export default {
  all,
  create
}
