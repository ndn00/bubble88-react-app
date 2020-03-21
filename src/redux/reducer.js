import {combineReducers} from 'redux';

import {UPDATE_ITEM} from './actions';
import {DELETE_ITEM} from './actions';

const itemReducer = (state=[], action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      for( var i = 0; i < state.length; i++){
        if (state[i].english_name === action.payload) {
           state.splice(i, 1);
           break
        }
      }
      return [...state];
    default:
      return state;
  }
};

const reducer = combineReducers({
  items: itemReducer,
});
export default reducer;
