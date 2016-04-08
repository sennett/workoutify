import { connect } from 'react-redux'
import React from 'react'
import { start, pause, reset } from '../actions/controls'
import { controlStates } from '../reducers/controls'
import Control from '../components/Control'
import classNames from 'classnames'

let Controls = ({start, pause, reset, startEnabled, pauseEnabled}) => {
  let startClasses = classNames('c-control  o-vertically-centered__content', {
    'is-enabled': startEnabled
  })
  let pauseClasses = classNames('c-control  o-vertically-centered__content', {
    'is-enabled': pauseEnabled
  })
  return (
    <div className="c-controls  o-vertically-centered">
      <div onClick={start} className={startClasses}>
        <Control type={Control.types.PLAY} />
      </div>
      <div onClick={pause} className={pauseClasses}>
        <Control type={Control.types.PAUSE} />
      </div>
      <div onClick={reset} className="c-control  o-vertically-centered__content  is-enabled">
        <Control type={Control.types.RESET} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  startEnabled: [controlStates.STARTED, controlStates.STARTING].indexOf(state.controls) === -1,
  pauseEnabled: [controlStates.PAUSED, controlStates.PAUSING].indexOf(state.controls) === -1
})

const mapDispatchToProps = (dispatch) => ({
  start: () => dispatch(start()),
  pause: () => dispatch(pause()),
  reset: () => dispatch(reset())
})

Controls = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default Controls
