import React from 'react'
import { connect } from 'react-redux'

let Exercises = ({exercises, currentTimer}) => {
  let timerNodes = exercises.map((timer, index) => (
    <div key={index}>{timer}</div>
  ))
  return (
    <div>
      {timerNodes}
    </div>
  )
}

const mapStateToProps = (state) => state.timeElapsed

Exercises = connect(mapStateToProps)(Exercises)

export default Exercises
