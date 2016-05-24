import {createAction, createReducer} from 'redux-act';
import {loop, Effects} from 'redux-loop';

import client from '../../helpers/apiClient';

const load = createAction('relef/products/LOAD');
const loadSuccess = createAction('relef/products/LOAD_SUCCESS');
const loadFail = createAction('relef/products/LOAD_FAIL');

const fetchProducts =
  () =>
    client.get(`/loadProducts`)
      .then(loadSuccess, loadFail);

const handleLoad = state => (
  loop({
    ...state,
    loaded: false,
    loading: true
  },
  Effects.promise(fetchProducts)
  )
);

const handleLoadSuccess = (state, payload) => ({
  ...state,
  loaded: true,
  loading: false,
  data: payload.data.data
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
  return globalState.settings && globalState.settings.loaded;
}

export default reducer;
export {load};

