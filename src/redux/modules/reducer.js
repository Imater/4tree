import { combineReducers } from 'redux-loop';
import { routeReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import settings from './settings';
import iconTabs from './iconTabs';

const reducers = combineReducers({
  reduxAsyncConnect,
  settings,
  iconTabs,
  routing,
});

export default reducers;
