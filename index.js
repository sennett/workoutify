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

let lastTime = Date.now()

setInterval(() => {
  let currentTime = Date.now()
  let timeElapsed = currentTime - lastTime
  store.dispatch(timeElapsedAction(timeElapsed))
  lastTime = currentTime
}, 100)
