import React, { useState , useEffect,useContext} from 'react';
import './Timer.sass';
import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
import {Context} from '../context/contest.js'

function Timer(props) {
  const {reset,start,stop} = useContext(Context)
  return (
      <>
      <div className='contCell'>
      <div className='timer-cellNumb'><p className='timer'>{props.minites}</p></div>
      <div className='timer-cellNumb'><p className='timer'>{props.seconds}</p></div>
      <div className='timer-cellNumb'><p className='timer'>{props.miliseconds}</p></div>
      </div>
      <div className='play'>
        <FaPlay onClick={start}/>  <FaPause onClick={stop}/> <FaStop onClick={reset}/>
      </div>
      </>
    );
  }




export default Timer;
// 


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
