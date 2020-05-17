import { combineReducers } from 'redux';

import triviaReducer from './triviaReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  trivia: triviaReducer,
  user: userReducer,
});

export default rootReducer;
