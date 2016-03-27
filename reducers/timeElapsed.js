const initialState = {
  timers: [
    3000, // seconds
    3000
  ],
  currentTimer: 0,
  previousTime: null
}

function updateTimer (state, action) {
  return Object.assign({}, state, {
    timers: state.timers.map((timer, index) => {
      if (index === state.currentTimer) {
        return timer - action.time
      } else {
        return timer
      }
    })
  })
}

function maybeMoveToNextTimer (state) {
  let newState = Object.assign({}, state)
  let currentTime = state.timers[state.currentTimer]
  if (state.previousTime > 0 && currentTime <= 0) {
    newState.currentTimer++
  }
  newState.previousTime = currentTime
  return newState
}

const timeElapsed = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_ELAPSED':
      state = updateTimer(state, action)
      state = maybeMoveToNextTimer(state)
      return state
    case 'RESET':
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default timeElapsed
