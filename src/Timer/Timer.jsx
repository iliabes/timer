import './Timer.sass'
import React, { useState , useEffect, useRef} from 'react';
import BtnAddTime from '../Buttons/btnAddTime/btnAddTime'
import BtnSetTime from '../Buttons/btnSetTime/btnSetTime'
import ActionButton from '../Buttons/actionButton/actionButton'
import Canvas from '../Canvas/Canvas'

import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';

function Timer() {
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(10)
  const [milisec, setMilisec] = useState(60)
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(true);
  
  function addMinutes(){
    setSec(sec + 1)
  }

  function startTtimer(){
    console.log(paused);
    if (paused || over) return;
    if (hour <= 0 && min <= 0 && sec <= 0 && milisec <= 0) {
      console.log('win')
      return;
    }
    setMilisec(Number(milisec) - 1)
    

    if(Number(milisec) <= 0 && Number(sec) > 0){
      setMilisec(60)
      setSec(sec - 1)
  
    }
  
    // if(seconds >= 60){
    //   setSeconds(0)
    //   minites(seconds + 1)
    // }
    // if(minites >= 60){
    //   alert('you win')
    // }
  }
  

  function start(){
    setPaused(false);
    setOver(false);
  }

  useEffect(()=>{
    let timerID = setInterval(()=> startTtimer(),10000)
    return () => clearInterval(timerID)
  })



    
    



  return (

    <div className="cont-timer">
    <div className="cont-add-time">
      <BtnAddTime function={addMinutes} title="+60min"/>
      <BtnAddTime title="+30min"/>
      <BtnAddTime title="+15min"/>
      <BtnAddTime title="+5min"/>
      <BtnAddTime title="+1min"/>
    </div>
    <div className="timer">
      <div className="timer-cell tiemrHour"><p>{hour}</p></div>
      <div className="timer-cell dots"><p>:</p></div>
      <div className="timer-cell  TimerMin"><p>{min}</p></div>
      <div className="timer-cell dots"><p>:</p></div>
      <div className="timer-cell  timerSec"><p>{sec}</p></div>
      <div className="timer-cell dots"><p>:</p></div>
      <div className="timer-cell  timerMilisec"><p>{milisec}</p></div>
    </div>
    <div className="cont-actionBtn">
        <ActionButton function={start} icon={FaPlay}  />
        <ActionButton icon={FaPause}  />
        <ActionButton icon={FaStop}  />
    </div>
    <div className="cont-set-time">
      <BtnSetTime  title='1h'/>
      <BtnSetTime title='30min'/>
      <BtnSetTime title='15min'/>
   
    </div>
    <Canvas/>
    </div>

 
  )
}




export default Timer;


// let interval = useRef()
// function startTtimer(){
//   const countDate = new Date("2022-03-10-10").getTime()
//   console.log(countDate,countDate.getHours(),);
  // interval = setInterval(() => {
  //   const now = new Date().getTime()
  //   const distance = countDate - now;
    
  //   const day = Math.floor(distance / (1000 * 60 * 60 * 24))
  //   const h = Math.floor(distance % (1000 * 60 * 60 * 24) /(1000 * 60 * 60))
  //   const m = Math.floor(distance % (1000 * 60 * 60 * 24) /(1000 * 60))
  //   const s = Math.floor(distance % (1000 * 60 * 60 * 24) /(1000))
  // }, 1000