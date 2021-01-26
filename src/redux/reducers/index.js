import {combineReducers} from 'redux';
// categories
import getAllCategories from './categories/getAllCategories';
import getCategoryDetails from './categories/getCategoryDetails';

// registrations
import postRegistration from './registrations/postRegistration';

// products
import getAllProducts from './products/getAllProducts';

// visitor
import startSession from './visitors/startSession';
import endSession from './visitors/endSession';

export default combineReducers({
  // categories
  getAllCategories,
  getCategoryDetails,

  // registration
  postRegistration,

  // products
  getAllProducts,

  // visitors
  startSession,
  endSession,
});
