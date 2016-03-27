import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'

const getCurrentExercise = (currentExercise) => (
  <div className="c-exercises__current  c-current-exercise">
    <div className="c-current-exercise__name">{currentExercise.name}</div>
    <div className="c-current-exercise__timer">
      <Timer timer={currentExercise.timer} />
    </div>
  </div>
)

const getNextExercise = (nextExercise) => (
  nextExercise ?
    (
      <div className="c-exercises__next">
        Next up: {nextExercise.name} - <Timer timer={nextExercise.timer} />
      </div>
    ) :
    ''
)

let Exercises = ({currentExercise, nextExercise}) => {
  return (
    <div className="u-full-height  c-exercises">
      {getCurrentExercise(currentExercise)}
      {getNextExercise(nextExercise)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentExercise: state.timeElapsed.exercises[state.timeElapsed.currentExercise],
    nextExercise: state.timeElapsed.exercises[state.timeElapsed.currentExercise + 1]
  }
}

Exercises = connect(mapStateToProps)(Exercises)

export default Exercises
