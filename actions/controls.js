export const start = () => ({
  type: actionTypes.STARTING
})

export const pause = () => ({
  type: actionTypes.PAUSING
})

export const reset = () => ({
  type: actionTypes.RESET
})

export const started = () => ({
  type: actionTypes.STARTED
})

export const paused = () => ({
  type: actionTypes.PAUSED
})

export const actionTypes = {
  STARTING: Symbol('STARTING'),
  PAUSING: Symbol('PAUSING'),
  STARTED: Symbol('STARTED'),
  PAUSED: Symbol('PAUSED'),
  RESET: Symbol('RESET')
}
