import { handleActions } from 'redux-actions';

const TOGGLE_ITEM = '4tree/accordion/TOGGLE_ITEM';

const initialState = {
  openedItems: []
};

const accordion = handleActions({
  [TOGGLE_ITEM]: (state, action) => {
    const { index } = action.payload;
    const { openedItems } = state;

    return {
      openedItems: [
        ...openedItems.slice(0, index),
        !openedItems[index],
        ...openedItems.slice(index + 1)
      ]};
  },
}, initialState);

export default accordion;

export const toggleItem = (index) => {
  return {
    type: TOGGLE_ITEM,
    payload: {
      index
    }
  };
};
