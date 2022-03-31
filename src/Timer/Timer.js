import React, { useState , useEffect} from 'react';
import './Timer.sass';
import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';


function Timer(props) {
let newTimer;




//   useEffect(() => {
//   console.log('switch');
//   if(props.switchTimer ){
//     newTimer = setInterval(()=>{timer()},1000)
//   }else{
//     clearInterval(newTimer)
//   }
// },[props.switchTimer]);

// function timer(){
//   console.log('contTimer');
//   setMlisecond(milisecond + 1)
//   if(milisecond >= 60){
//     setMlisecond(0)
//     setSeconds(seconds + 1)
//   }
//   if(seconds >= 60){
//     setSeconds(0)
//     minites(seconds + 1)
//   }
//   if(minites >= 60){
//     alert('you win')
//   }
// }

// let newTimer ;






  return (
      <>
      <p id='timerText' className='timer'>{props.time}</p>
      <div className='play'>
        <FaPlay onClick={console.log()}/> <FaStop onClick={console.log()}/> <FaPause/>
      </div>
      </>
    );
  }




export default Timer;

