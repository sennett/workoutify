import React from 'react'
import Exercises from '../containers/Exercises'
import Controls from '../containers/Controls'

const WorkoutDisplay = () => (
  <div className="c-workout-display">
    <div className="c-workout-display__exercises">
      <Exercises />
    </div>
    <div className="c-workout-display__controls">
      <Controls />
    </div>
  </div>
)

export default WorkoutDisplay
