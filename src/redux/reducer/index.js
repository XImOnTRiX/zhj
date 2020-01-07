import { combineReducers } from 'redux';

import dataReducer from './data-reducer';
import postReducer from './post-reducer';
import feedbackReducer from './feedback-reducer';
import loadedReducer from './loaded-reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  post: postReducer,
  feedback: feedbackReducer,
  loaded: loadedReducer,
});

export default rootReducer;
