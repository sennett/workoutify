import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import workoutifyApp from './reducers'
import App from './components/App'
import timer from './otherThings/timer'
import moveToNextExercise from './otherThings/moveToNextExercise'

let store = createStore(workoutifyApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

timer(store)
moveToNextExercise(store)
