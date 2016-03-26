import React from 'react'
import { connect } from 'react-redux'

let Countdown = ({timer}) => {
  return (
    <div>{timer}</div>
  )
}

const mapStateToProps = (state) => state.timeElapsed

Countdown = connect(mapStateToProps)(Countdown)

export default Countdown
