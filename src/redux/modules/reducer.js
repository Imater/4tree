import { combineReducers } from 'redux-loop';
import { routeReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import settings from './settings';
import selectColor from './selectColor';

const reducers = combineReducers({
  reduxAsyncConnect,
  settings,
  selectColor,
  routing,
});

export default reducers;
