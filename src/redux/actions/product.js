import qs from 'qs';
import services from '../../Helpers/services';

export default {
  getCategories: (page = 1, limit = '-') => ({
    type: 'GET_PRODUCTS',
    payload: services().get(`products?${qs.stringify({page, limit})}`),
  }),
};
