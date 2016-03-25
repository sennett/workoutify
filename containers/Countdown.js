import React from 'react'
import { connect } from 'react-redux'

let Countdown = ({timeElapsed}) => {
  return (
    <div>{timeElapsed}</div>
  )
}

const mapStateToProps = (state) => ({
  timeElapsed: state.ui.timeElapsed
})

Countdown = connect(mapStateToProps)(Countdown)

export default Countdown
