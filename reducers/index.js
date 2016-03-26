import { combineReducers } from 'redux'
import timeElapsed from './timeElapsed'
import controls from './controls'

const workoutifyApp = combineReducers({
  timeElapsed,
  controls
})

export default workoutifyApp
