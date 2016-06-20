import { createAction, createReducer} from 'redux-act';

export const expand = createAction('4tree/nodeState/expand');

const initialState = {
  '#1': {
    '0': {
      expanded: true,
    },
  }
};

const handleExpand = (state, { nodeStateId, id, expanded }) => {
  const newState = {
    ...state
  };
  newState[nodeStateId][id] = {
    ...newState[nodeStateId][id],
    expanded: expanded
  };
  return newState;
};

const reducer = createReducer(on => {
  on(expand, handleExpand);
}, initialState);

export default reducer;

