import { combineReducers } from 'redux';

import dataReducer from './data-reducer';
import postReducer from './post-reducer';
import feedbackReducer from './feedback-reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  post: postReducer,
  feedback: feedbackReducer,
});

export default rootReducer;
