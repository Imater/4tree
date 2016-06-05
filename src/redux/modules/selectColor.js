import { handleActions } from 'redux-actions';

const SET_COLOR = 'relef/selectColor/SET_COLOR';

const initialState = {
  currentColorIndex: 0,
  colors: ['#1abc9c', '#40d47e', '#3498db', '#9b59b6', '#e74c3c', '#ecf0f1', '#f1c40f', '#34495e']
};

const selectColor = handleActions({
  [SET_COLOR]: (state, action) => {
    return ({
      ...state,
      currentColorIndex: action.payload.currentColorIndex
    });
  }
}, initialState);

export default selectColor;

export const setColorIndex = (currentColorIndex) => {
  return {
    type: SET_COLOR,
    payload: {
      currentColorIndex
    }
  };
};
