import {
  ADMIN_API,
  DEFAULT_PAGE,
  DEFAULT_ROWS
} from '../constants';
import rest from '../utils/rest';
import { postData } from '../utils/postData';

const admin_good = `${ADMIN_API}/goods`
const DEFAULT = {
  categoryId: 100000,
  goodName: '',
  price: 0,
  originalPrice: 0,
  inventory: 0,
  spec: '1*1',
  origin: '',
  imageFile: ''
}

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
  good,
  imageFile
) => {
  const goodData = {
    ...DEFAULT,
    ...good,
    imageFile
  }

  return await rest.post(adminId, token)(
    admin_good,
    {
      ...goodData,
      imageFile
    }
  )
}

const update = async (
  adminId,
  token,
  good
) => {
  console.log(adminId)
  console.log(token)
  console.log(good)
  return await rest.patch(adminId, token)(
    `${admin_good}/${good.goodId}`,
    good
  )
}

export default {
  all,
  create,
  update
}
