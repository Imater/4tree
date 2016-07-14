import { combineReducers } from 'redux-loop';
import { routeReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import settings from './settings';
import selectColor from './selectColor';
import nodes from './nodes';
import iconsStore from './iconsStore';
import nodeState from './nodeState';
import tasks from './tasks';
import nodeProperty from './nodeProperty';
import accordion from './accordion';
import iconTabs from './iconTabs';

const reducers = combineReducers({
  accordion,
  iconTabs,
  nodes,
  tasks,
  nodeState,
  iconsStore,
  nodeProperty,
  reduxAsyncConnect,
  routing,
  selectColor,
  settings,
});

export default reducers;
