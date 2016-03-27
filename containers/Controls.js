import { connect } from 'react-redux'
import React from 'react'
import { start, pause, reset } from '../actions/controls'

let Controls = ({start, pause, reset}) => (
  <div className="c-workout-controls">
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
  </div>
)

const mapStateToProps = (state, ownProps) => state
const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => {
    dispatch(start())
  },
  pause: () => {
    dispatch(pause())
  },
  reset: () => {
    dispatch(reset())
  }
})

Controls = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default Controls
