import { combineReducers } from 'redux-loop';
import { routeReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import settings from './settings';
import accordion from './accordion.js';

const reducers = combineReducers({
  reduxAsyncConnect,
  settings,
  routing,
  accordion
});

export default reducers;
