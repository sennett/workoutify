import React from 'react'
import { connect } from 'react-redux'

let Countdown = ({timers, currentTimer}) => {
  let timerNodes = timers.map((timer, index) => (
    <div key={index}>{timer}</div>
  ))
  return (
    <div>
      {timerNodes}
    </div>
  )
}

const mapStateToProps = (state) => state.timeElapsed

Countdown = connect(mapStateToProps)(Countdown)

export default Countdown
