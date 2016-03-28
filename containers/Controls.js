import { connect } from 'react-redux'
import React from 'react'
import { start, pause, reset } from '../actions/controls'
import Control from '../components/Control'

let Controls = ({start, pause, reset}) => (
  <div className="c-controls  o-vertically-centered">
    <div onClick={start} className="c-control  o-vertically-centered__content">
      <Control type={Control.types.PLAY} />
    </div>
    <div onClick={pause} className="c-control  o-vertically-centered__content">
      <Control type={Control.types.PAUSE} />
    </div>
    <div onClick={reset} className="c-control  o-vertically-centered__content">
      <Control type={Control.types.RESET} />
    </div>
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
