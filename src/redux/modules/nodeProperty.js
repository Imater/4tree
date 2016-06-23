import {createAction, createReducer} from 'redux-act';

export const set = createAction('relef/nodeProperty/SET');

const handleSet = (state, payload) => {
  const newState = {
    ...state
  };
  newState[payload.id] = {
    ...newState[payload.id],
    [payload.propertyName]: payload.value
  };
  return newState;
};

const reducer = createReducer(on => {
  on(set, handleSet);
}, {});

export default reducer;

