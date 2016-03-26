const controls = (state = 'PAUSED', action) => {
  switch (action.type) {
    case 'START':
      return 'STARTED'
    case 'PAUSE':
      return 'PAUSED'
    default:
      return state
  }
}

export default controls
