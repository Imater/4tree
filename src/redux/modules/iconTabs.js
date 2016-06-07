import { handleActions } from 'redux-actions';

const SET_TAB_ACTIVE_INDEX = '4tree/iconTabs/SET_TAB_ACTIVE_INDEX';

const initialState = {
  tabActiveIndex: 3,
  tabs: ['Оформление', 'Проект', 'Обзор', 'Счетчики', 'Поделиться']
};

const iconTabs = handleActions({
  [SET_TAB_ACTIVE_INDEX]: (state, action) => ({
    ...state,
    tabActiveIndex: action.payload.newTabActiveIndex
  }),
}, initialState);

export default iconTabs;

export const setTabActiveIndex = (newTabActiveIndex) => {
  return {
    type: SET_TAB_ACTIVE_INDEX,
    payload: {
      newTabActiveIndex
    }
  };
};
