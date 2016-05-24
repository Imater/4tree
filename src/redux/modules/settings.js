import { handleActions } from 'redux-actions';
import { loop, Effects } from 'redux-loop';

import client from '../../helpers/apiClient';

const MENU_SHOW = 'relef/settings/MENU_SHOW';
const MENU_HIDE = 'relef/settings/MENU_HIDE';

const LOAD = 'relef/settings/LOAD';
const LOAD_SUCCESS = 'relef/settings/LOAD_SUCCESS';
const LOAD_FAIL = 'relef/settings/LOAD_FAIL';


const initialState = {
  loaded: false,
  isAgentMenuVisible: false,
};

export const hideMenu = () => {
  return {
    type: MENU_HIDE
  };
};

const fetchSettings = () => {
  return client.get(`/loadSettings`)
    .then((result) => {
      return {
        type: LOAD_SUCCESS,
        result: result.data
      };
    })
    .catch((error) => {
      return {
        type: LOAD_FAIL,
        error: error.data
      };
    });
};

const settings = handleActions({
  [MENU_SHOW]: (state) => ({
    ...state,
    isAgentMenuVisible: true
  }),

  [MENU_HIDE]: (state) => ({
    ...state,
    isAgentMenuVisible: false
  }),

  [LOAD_SUCCESS]: (state, action) => {
    return ({
      ...state,
      loading: false,
      loaded: true,
      data: action.result.data
    });
  },

  [LOAD_FAIL]: (state, action) => ({
    ...state,
    loading: false,
    loaded: false,
    error: action.error
  }),

  [LOAD]: (state) => {
    return loop(
      {
        ...state,
        loaded: false,
        loading: true
      },
      Effects.batch([
        Effects.promise(fetchSettings),
      ])
    );
  },
}, initialState);

export default settings;


export const showMenu = () => {
  return {
    type: MENU_SHOW
  };
};

export function isLoaded(globalState) {
  return globalState.settings && globalState.settings.loaded;
}

export const loadSettings = () => {
  return {
    type: LOAD,
  };
};
