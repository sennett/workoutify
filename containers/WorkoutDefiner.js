import React from 'react'
import { modifyWorkout } from '../actions/modifyWorkout'
import { connect } from 'react-redux'

let WorkoutDefiner = ({modifyWorkout}) => {
  let textareaNode
  return (
    <div className="u-full-height">
      <textarea className="c-workout-input" ref={(node) => textareaNode = node} />
      <button onClick={() => modifyWorkout(textareaNode.value)}>save</button>
    </div>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  modifyWorkout: (rawWorkoutData) => {
    dispatch(modifyWorkout(rawWorkoutData))
  }
})

WorkoutDefiner = connect(mapStateToProps, mapDispatchToProps)(WorkoutDefiner)

export default WorkoutDefiner
