import { actionTypes } from '../actions/controls'

const controls = (state = controlStates.PAUSED, action) => {
  switch (action.type) {
    case actionTypes.STARTING:
      return controlStates.STARTING
    case actionTypes.PAUSING:
      return controlStates.PAUSING
    case actionTypes.STARTED:
      return controlStates.STARTED
    case actionTypes.PAUSED:
      return controlStates.PAUSED
    default:
      return state
  }
}

export const controlStates = {
  STARTING: Symbol('STARTING'),
  PAUSING: Symbol('PAUSING'),
  STARTED: Symbol('STARTED'),
  PAUSED: Symbol('PAUSED')
}


export default controls
