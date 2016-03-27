import React from 'react'
import { connect } from 'react-redux'

let Exercises = ({exercises, currentExercise}) => {
  let timerNodes = exercises.map((timer, exerciseIndex) => {
    let style = {
      opacity: exerciseIndex === currentExercise ? 1 : 0.5
    }
    return <div key={exerciseIndex} style={style}>{timer}</div>
  })
  return (
    <div>
      {timerNodes}
    </div>
  )
}

const mapStateToProps = (state) => state.timeElapsed

Exercises = connect(mapStateToProps)(Exercises)

export default Exercises
