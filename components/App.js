import React from 'react'
import WorkoutDisplay from './WorkoutDisplay'
import WorkoutDefiner from '../containers/WorkoutDefiner'

const App = () => (
  <div className="u-full-height  c-layout">
    <div className="u-full-height  c-layout__workout-definer">
      <WorkoutDefiner />
    </div>
    <div className="u-full-height  c-layout__workout-display">
      <WorkoutDisplay />
    </div>
  </div>
)

export default App
