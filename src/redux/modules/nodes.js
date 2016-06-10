import {createAction, createReducer} from 'redux-act';
import {loop, Effects} from 'redux-loop';

import client from '../../helpers/apiClient';

export const load = createAction('relef/nodes/LOAD');
const loadSuccess = createAction('relef/nodes/LOAD_SUCCESS');
const loadFail = createAction('relef/nodes/LOAD_FAIL');

const fetchNodes =
  () =>
    client.get(`/loadNodes`)
      .then(loadSuccess)
      .catch(loadFail);

const handleLoad = state => (
  loop({
    ...state,
    loaded: false,
    loading: true
  },
  Effects.batch([
    Effects.promise(fetchNodes),
  ])
  )
);

const handleLoadSuccess = (state, payload) => ({
  ...state,
  loaded: true,
  loading: false,
  data: payload.data
});

const handleLoadFail = (state, payload) => ({
  ...state,
  loaded: false,
  loading: false,
  error: payload.data
});

const reducer = createReducer(on => {
  on(load, handleLoad);
  on(loadSuccess, handleLoadSuccess);
  on(loadFail, handleLoadFail);
}, {});

export function isLoaded(globalState) {
  return globalState.nodes && globalState.nodes.loaded;
}

export default reducer;

