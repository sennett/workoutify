import nextExercise from '../actions/nextExercise'

const moveToNextExercise = (store) => {
  let previousTime
  store.subscribe(() => {
    let state = store.getState()
    let currentTime = state.timeElapsed.timers[state.timeElapsed.currentTimer]
    if (previousTime > 0 && currentTime <= 0) {
      console.log('end')
    }
    previousTime = currentTime
  })
}

export default moveToNextExercise
