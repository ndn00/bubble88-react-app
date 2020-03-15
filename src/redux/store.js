import {createStore} from 'redux'

import {addItem} from './actions'
import reducer from './reducer'

const DEFAULT_STATE = {
  items: [],
}

const store = createStore(reducer, DEFAULT_STATE)
export default store
