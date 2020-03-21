import React from 'react'
import {Provider} from 'react-redux'

import store from './src/redux/store'
import AppNavigator from './src/navigations/index'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
