import timeElapsedAction from '../actions/timeElapsed'
import { started, paused } from '../actions/controls'
import { controlStates } from '../reducers/controls'

const timer = (store) => {
  let interval

  const start = () => {
    let lastTime = Date.now()
    interval = setInterval(() => {
      let currentTime = Date.now()
      let timeElapsed = currentTime - lastTime
      store.dispatch(timeElapsedAction(timeElapsed))
      lastTime = currentTime
    }, 100)
    store.dispatch(started())
  }

  const pause = () => {
    clearInterval(interval)
    store.dispatch(paused())
  }

  store.subscribe(() => {
    let state = store.getState()
    if (state.controls === controlStates.STARTING) {
      start()
    }
    if (state.controls === controlStates.PAUSING) {
      pause()
    }
  })
}

export default timer
