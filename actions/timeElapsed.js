export const timeElapsed = (milliseconds) => ({
  type: actionTypes.TIME_ELAPSED,
  time: milliseconds
})

export const actionTypes = {
  TIME_ELAPSED: Symbol('TIME_ELAPSED')
}
