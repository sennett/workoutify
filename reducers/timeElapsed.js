const initialState = {
  ui: {
    timeElapsed: null
  },
  startTime: Date.now()
}

const timeElapsed = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_ELAPSED':
      let elapsedTimeInSeconds = (action.time - state.startTime) / 1000
      let minutes = Math.floor(elapsedTimeInSeconds / 60)
      let seconds = elapsedTimeInSeconds % 60
      return Object.assign({}, state, {
        ui: {
          timeElapsed: `${minutes}:${seconds}`
        }
      })
    default:
      return state
  }
}

export default timeElapsed
