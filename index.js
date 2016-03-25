import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import timeElapsed from './reducers/timeElapsed'
import App from './components/App'
import timeElapsedAction from './actions/timeElapsed'

let store = createStore(timeElapsed)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

setInterval(() => {
  store.dispatch(timeElapsedAction())
}, 100)
