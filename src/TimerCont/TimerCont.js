import React, { useState , useEffect} from 'react';
import './Timer.sass';

import Timer from '../Timer/Timer.js'
import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';


function TimerCont() {
const [switchTimer, setSwitchTimer] = useState(1);
const [minites, setminites] = useState(0);
const [seconds, setSeconds] = useState(0);
const [milisecond, setMlisecond] = useState(0);
let s = 0

function timer(){
  if(timer < 60){
  timer++
  }
  
}

return (
    <div className='content-contTimer'>
        <Timer minites={minites} seconds={seconds} milisecond={milisecond} switchTimer={switchTimer}/>
    </div>
  );
}




export default TimerCont

