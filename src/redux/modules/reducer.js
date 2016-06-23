import { combineReducers } from 'redux-loop';
import { routeReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import settings from './settings';
import selectColor from './selectColor';
import nodes from './nodes';
import nodeState from './nodeState';
import nodeProperty from './nodeProperty';
import accordion from './accordion';
import iconTabs from './iconTabs';

const reducers = combineReducers({
  accordion,
  iconTabs,
  nodes,
  nodeState,
  nodeProperty,
  reduxAsyncConnect,
  routing,
  selectColor,
  settings,
});

export default reducers;
