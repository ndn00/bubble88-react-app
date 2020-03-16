import {combineReducers} from 'redux';

import {UPDATE_ITEM} from './actions';
import {DELETE_ITEM} from './actions';

const itemReducer = (state=[], action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
};

const reducer = combineReducers({
  items: itemReducer,
});
export default reducer;
