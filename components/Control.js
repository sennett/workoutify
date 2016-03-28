import React from 'react'
import classNames from 'classnames'

const Control = ({type}) => {
  let controlClass = classNames('fa  fa-stack-1x  fa-inverse', type)
  return (
    <div className="fa-stack  fa-lg">
      <div className="fa  fa-circle  fa-stack-2x"></div>
      <div className={controlClass}></div>
    </div>
  )
}

Control.types = {
  PLAY: 'fa-play',
  PAUSE: 'fa-pause',
  RESET: 'fa-fast-backward'
}

export default Control
