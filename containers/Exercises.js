import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'

const getCurrentExercise = (currentExercise) => (
  <div className="c-current-exercise  o-vertically-centered__content">
      <div className="c-current-exercise__name">{currentExercise.name}</div>
      <div className="c-current-exercise__timer">
        <Timer timer={currentExercise.timer} />
    </div>
  </div>
)

const getNextExercise = (nextExercise) => (
  nextExercise ?
    (
      <div className="c-next-exercise  o-vertically-centered__content">
        Next: {nextExercise.name} (<Timer timer={nextExercise.timer} />)
      </div>
    ) :
    ''
)

const getTotalTimeRemaining = (totalTimeRemaining) => (
  <div className="c-total-time-remaining  o-vertically-centered__content">
    Total time remaining <Timer timer={totalTimeRemaining} />
  </div>
)

let Exercises = ({currentExercise, nextExercise, totalTimeRemaining}) => {
  return (
    <div className="c-exercises">
      <div className="c-exercises__current  o-vertically-centered">
        {getCurrentExercise(currentExercise)}
      </div>
      <div className="c-exercises__next  o-vertically-centered">
        {getNextExercise(nextExercise)}
      </div>
      <div className="c-exercises__total-time-left  o-vertically-centered">
        {getTotalTimeRemaining(totalTimeRemaining)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentExercise: state.timeElapsed.exercises[state.timeElapsed.currentExercise],
    nextExercise: state.timeElapsed.exercises[state.timeElapsed.currentExercise + 1],
    totalTimeRemaining: state.timeElapsed.exercises.reduce((totalTime, exercise, index) => {
      let returnable = totalTime
      if (index >= state.timeElapsed.currentExercise) {
        returnable += exercise.timer
      }
      return returnable
    }, 0)
  }
}

Exercises = connect(mapStateToProps)(Exercises)

export default Exercises
