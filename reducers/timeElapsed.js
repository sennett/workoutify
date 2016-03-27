const initialState = {
  exercises: [{
    name: 'run on treadmill',
    timer: 1000
  },{
    name: 'burpies',
    timer: 1000
  },{
    name: 'do something else',
    timer: 1000
  }],
  currentExercise: 0,
  previousTime: null,
  complete: false
}

function updateTimer (state, action) {
  return Object.assign({}, state, {
    exercises: state.exercises.map((exercise, index) => {
      if (index === state.currentExercise) {
        return Object.assign({}, exercise, {
          timer: exercise.timer - action.time
        })
      } else {
        return exercise
      }
    })
  })
}

function maybeMoveToNextExercise (state) {
  let newState = Object.assign({}, state)
  let currentTime = state.exercises[state.currentExercise].timer
  if (state.previousTime > 0 && currentTime <= 0) {
    newState.currentExercise++
  }
  if (newState.currentExercise === newState.exercises.length) {
    newState.complete = true
  }
  newState.previousTime = currentTime
  return newState
}

const timeElapsed = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_ELAPSED':
      state = updateTimer(state, action)
      state = maybeMoveToNextExercise(state)
      return state
    case 'RESET':
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default timeElapsed
