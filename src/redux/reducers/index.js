import {combineReducers} from 'redux';
import getAllCategories from './categories/getAllCategories';
import getCategoryDetails from './categories/getCategoryDetails';
import postRegistration from './registrations/postRegistration';
import getAllProducts from './products/getAllProducts';

export default combineReducers({
  getAllCategories,
  getCategoryDetails,
  postRegistration,
  getAllProducts,
});
