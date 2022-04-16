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
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')
  const [milisec, setMilisec] = useState('00')
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(true);
  
  function addMinutes(minute){
    console.log(Number(min),minute);
    if(Number(min) + Number(minute) >= 10){
      setMin(Number(min) + minute)
    }else{
      let nm = Number(min) + minute
      setMin(('0' + nm))
      console.log(min);
    }
    if(Number(min) + Number(minute) >= 60){
      if(Number(min) + Number(minute) <= 10){
        setMin(min + minute - 60)
      }else{
        let nm = (Number(min) + minute) - 60
        setMin(('0' + nm))
      }
      
      setHour(hour + 1)
    }
  }

  function setMinutes(minute){
    setMin(minute)
  }

  function startTtimer(){
    

    if (paused || over) return;
    if (Number(hour) <= 0 && Number(min) <= 0 && Number(sec) <= 0 && Number(milisec) <= 0) {
      setMilisec('00')
      reset()
      return;
    }
    


    if(Number(min) === 0 && Number(hour) > 0){
      setMin(59)
      setHour(hour - 1)
    }
    if(Number(sec) === 0 && Number(min) > 0){
      setSec(59)
      
      if(Number(min) > 10){
        setMin(min - 1)
      }else{
        let nm = (Number(min) - 1)
        setSec('0' + nm)
      }
    }

    if(Number(milisec) === 0 && Number(sec) > 0){
      setMilisec(59)
     
      if(Number(sec) > 10){
        setSec(sec - 1)
      }else{
        let nm = (Number(sec) - 1)
        setSec('0' + nm)
      }
 
    }

    if(Number(milisec) !== 0){
      if(Number(milisec) > 10){
        setMilisec(Number(milisec) - 1)
      }else{
        let nm = (Number(milisec) - 1)
        setMilisec('0' + nm)
      }
    }
  




  }
  

  function start(){
    setPaused(false);
    setOver(false);
    console.log('start');
  }

  function pause(){
    setPaused(true);

  }

  function reset(){
    setPaused(true);
    setOver(true);
    setHour('00')
    setMin('00')
    setSec('00')
    setMilisec('00')
  }

  useEffect(()=>{
    let timerID = setInterval(()=> startTtimer(),10)
    return () => clearInterval(timerID)
  })



    
    



  return (

    <div className="cont-timer">
       {/* <Canvas/> */}
    <div className="cont-add-time">
      <BtnAddTime function={()=>{addMinutes(60)}} title="+60min"/>
      <BtnAddTime function={()=>{addMinutes(30)}} title="+30min"/>
      <BtnAddTime function={()=>{addMinutes(15)}} title="+15min"/>
      <BtnAddTime function={()=>{addMinutes(5)}} title="+5min"/>
      <BtnAddTime function={()=>{addMinutes(1)}} title="+1min"/>
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
        <ActionButton function={pause} icon={FaPause}  />
        <ActionButton function={reset} icon={FaStop}  />
    </div>
    <div className="cont-set-time">
      <BtnSetTime function={()=>{setMinutes(60)}} title='1h'/>
      <BtnSetTime function={()=>{setMinutes(30)}} title='30min'/>
      <BtnSetTime function={()=>{setMinutes(15)}} title='15min'/>
   
    </div>
   
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