import React from 'react'
import { modifyWorkout } from '../actions/modifyWorkout'
import { connect } from 'react-redux'

let WorkoutDefiner = ({modifyWorkout}) => {
  return (
    <div className="u-full-height">
      <textarea className="c-workout-input" />
      <button onClick={modifyWorkout}>save</button>
    </div>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  modifyWorkout: () => {
    dispatch(modifyWorkout('hello'))
  }
})

WorkoutDefiner = connect(mapStateToProps, mapDispatchToProps)(WorkoutDefiner)

export default WorkoutDefiner
