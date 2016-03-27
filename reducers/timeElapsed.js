const initialState = {
  timers: [
    3000, // seconds
    3000
  ],
  currentTimer: 0
}

const timeElapsed = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_ELAPSED':
      return Object.assign({}, state, {
        timers: state.timers.map((timer, index) => {
          if (index === state.currentTimer) {
            return timer - action.time
          } else {
            return timer
          }
        })
      })
    case 'NEXT_TIMER':
      return Object.assign({}, state, {
        currentTimer: state.currentTimer + 1
      })
    case 'RESET':
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default timeElapsed
