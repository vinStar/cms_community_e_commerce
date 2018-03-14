import {
  ADMIN_API,
  DEFAULT_PAGE,
  DEFAULT_ROWS
} from '../constants';
import rest from '../utils/rest';

const admin_good = `${ADMIN_API}/goods`

const all = async (adminId, token, page = DEFAULT_PAGE, rows = DEFAULT_ROWS) => {
  return await rest(adminId, token).get(admin_good, {
    params: {
      page,
      rows
    }
  })
}

export default {
  all
}
