import stade from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js" 
import * as sounds from "./sounds.js"

export function countDown(){

  clearTimeout(stade.countDownId) //zerando o countDownId

if(!stade.isRunning){
  return
}

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    sounds.kichenTimer.play()
    reset()
    return
  }

  displayUpdate(minutes, seconds)

  console.log('iniciou')

  stade.countDownId = setTimeout(() => countDown(), 1000)
}

export function displayUpdate(minutes, seconds){
  minutes = minutes ?? stade.minutes
  seconds = seconds ?? stade.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0") 
  el.seconds.textContent = String(seconds).padStart(2, "0")
}