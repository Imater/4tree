import {createAction, createReducer} from 'redux-act';
import {loop, Effects} from 'redux-loop';

import client from '../../helpers/apiClient';

export const load = createAction('4tree/tasks/LOAD');
const loadSuccess = createAction('4tree/tasks/LOAD_SUCCESS');
const loadFail = createAction('4tree/tasks/LOAD_FAIL');

export const setCheck = createAction('4tree/tasks/SET_CHECK');

const fetchTasks =
  () =>
    client.get(`/loadTasks`)
      .then(loadSuccess)
      .catch(loadFail);

const handleLoad = state => (
  loop({
    ...state,
    loaded: false,
    loading: true
  },
  Effects.batch([
    Effects.promise(fetchTasks),
  ])
  )
);

const handleLoadSuccess = (state, payload) => ({
  ...state,
  loaded: true,
  loading: false,
  ...payload.data
});

const handleLoadFail = (state, payload) => ({
  ...state,
  loaded: false,
  loading: false,
  error: payload.data
});

const handleSetCheck = (state, payload) => {
  if (!state.tasks || !state.tasks[payload.id]) {
    return state;
  }

  const newState = {
    ...state
  };
  newState.tasks[payload.id].checked = payload.checked;
  newState.tasks[payload.id].tm = Date.now();
  return newState;
};

const reducer = createReducer(on => {
  on(load, handleLoad);
  on(loadSuccess, handleLoadSuccess);
  on(loadFail, handleLoadFail);
  on(setCheck, handleSetCheck);
}, {});

export function isLoaded(globalState) {
  return globalState.tasks && globalState.tasks.loaded;
}

export default reducer;

