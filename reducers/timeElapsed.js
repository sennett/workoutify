const initialState = {
  timer: 30000 // seconds
}

const timeElapsed = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_ELAPSED':
      return Object.assign({}, state, {
        timer: state.timer - action.time
      })
    case 'RESET':
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default timeElapsed
