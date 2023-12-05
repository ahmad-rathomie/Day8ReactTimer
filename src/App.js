import React from 'react'
import {useTimer} from 'use-timer'
import "./App.css"

function App() {

  const {time, start, pause, reset, status}  =useTimer();

  const miliseconds = Math.floor(time * 10) % 10

  return (
    <><center>
    <div>
    <p>Start time :{time}s, {miliseconds} ms</p>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset} >Reset</button>
     
      </div>
     
      {status ==="RUNNING" && <p>Running...</p>}
     
      
      </center></>
    
  )
}

export default App