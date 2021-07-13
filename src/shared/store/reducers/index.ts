import { combineReducers } from '@reduxjs/toolkit';

import categoryReducer from './category/reducer';

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;
