import { connect } from 'react-redux'
import React from 'react'
import { start, pause, reset } from '../actions/controls'
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
  startEnabled: state.controls !== 'STARTED',
  pauseEnabled: state.controls !== 'PAUSED'
})
const mapDispatchToProps = { start, pause, reset }

Controls = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default Controls
