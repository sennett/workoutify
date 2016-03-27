import timeElapsedAction from '../actions/timeElapsed'
import { pause } from '../actions/controls'

const timer = (store) => {
  let running = false
  let interval

  const start = () => {
    let lastTime = Date.now()
    interval = setInterval(() => {
      running = true
      let currentTime = Date.now()
      let timeElapsed = currentTime - lastTime
      store.dispatch(timeElapsedAction(timeElapsed))
      lastTime = currentTime
    }, 100)
  }

  const pause = () => {
    clearInterval(interval)
    running = false
  }

  store.subscribe(() => {
    let state = store.getState()
    if (!running && state.controls === 'STARTED') {
      start()
    }
    if (running && state.controls === 'PAUSED' || state.timeElapsed.complete) {
      pause()
    }
  })
}

export default timer
