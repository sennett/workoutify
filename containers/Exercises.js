import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'

const getCurrentExercise = (currentExercise) => (
  <div className="c-current-exercise  o-vertically-centered">
    <div className="o-vertically-centered__content">
      <div className="c-current-exercise__name">{currentExercise.name}</div>
      <div className="c-current-exercise__timer">
        <Timer timer={currentExercise.timer} />
      </div>
    </div>
  </div>
)

const getNextExercise = (nextExercise) => (
  nextExercise ?
    (
      <div>
        Next up: {nextExercise.name} - <Timer timer={nextExercise.timer} />
      </div>
    ) :
    ''
)

let Exercises = ({currentExercise, nextExercise}) => {
  return (
    <div className="c-exercises">
      <div className="c-exercises__current">
        {getCurrentExercise(currentExercise)}
      </div>
      <div className="c-exercises__next">
        {getNextExercise(nextExercise)}
      </div>
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
