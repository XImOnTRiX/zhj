import { combineReducers } from 'redux';

import dataReducer from './data-reducer';
import postReducer from './post-reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  post: postReducer,
});

export default rootReducer;
