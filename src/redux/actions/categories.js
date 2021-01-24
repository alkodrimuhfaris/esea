import qs from 'qs';
import services from '../../Helpers/services';

export default {
  getCategories: (page = 1, limit = '-') => ({
    type: 'GET_CATEGORIES',
    payload: services().get(`categories?${qs.stringify({page, limit})}`),
  }),
  getCategoriesDetail: (id, page = 1, limit = 10) => ({
    type: 'GET_CATEGORY_DETAIL',
    payload: services().get(`categories/${id}?${qs.stringify({page, limit})}`),
  }),
};
