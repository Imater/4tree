import { combineReducers } from 'redux-loop';
import { routeReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import settings from './settings';
import selectColor from './selectColor';
import accordion from './accordion.js';
import iconTabs from './iconTabs';

const reducers = combineReducers({
  reduxAsyncConnect,
  settings,
  selectColor,
  iconTabs,
  routing,
  accordion,
});

export default reducers;
