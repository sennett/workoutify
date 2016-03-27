import React from 'react'

const padWithZeros = (thingToPad) => {
  thingToPad = thingToPad.toString()
  if (thingToPad.length >= 2)
    return thingToPad
  if (thingToPad.length === 1)
    return `0${thingToPad}`
  if (thingToPad.length === 0)
    return '00'
}

// timer is in milliseconds
const Timer = ({timer}) => {
  let timeInSeconds = timer / 1000
  let minutes = Math.floor(timeInSeconds / 60)
  let seconds = Math.round(timeInSeconds % 60)
  return <span>{padWithZeros(minutes)}:{padWithZeros(seconds)}</span>
}

export default Timer
