import React, { useState , useEffect} from 'react';
import './Timer.sass';

import {Context} from '../context/contest.js'
import Timer from '../Timer/Timer.js'
import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';


function TimerCont() {

const [switchTimer, setSwitchTimer] = useState(1);
const [minites, setminites] = useState(0);
const [seconds, setSeconds] = useState(0);
const [miliseconds, setMliseconds] = useState('0');
const [paused, setPaused] = useState(true);
const [over, setOver] = useState(true);


function timer(){

  if (paused || over) return;
  setMliseconds(Number(miliseconds) + 1)
  // if(Number(miliseconds) < 10){
  //   setMliseconds('0' + miliseconds)
  // }
  if(Number(miliseconds) >= 60){
    setMliseconds(0)
    setSeconds(seconds + 1)

  }

  if(seconds >= 60){
    setSeconds(0)
    minites(seconds + 1)
  }
  if(minites >= 60){
    alert('you win')
  }
}

useEffect(()=>{
  let timerID = setInterval(()=> timer(),10)
  return () => clearInterval(timerID)
})

const stop = () => {
  setPaused(true);
};

const reset = () => {
  setminites(0)
  setSeconds(0) 
  setMliseconds(0)
  setPaused(true);
  setOver(true);
};

const start = () => {
  setPaused(false);
  setOver(false);
};

return (
    <div className='content-contTimer'>
      <Context.Provider value={{reset,start,stop}}>
        <Timer minites={minites} seconds={seconds} miliseconds={miliseconds} switchTimer={switchTimer}/>
      </Context.Provider>
    </div>
  );
}




export default TimerCont

