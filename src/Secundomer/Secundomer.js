import React, { useState , useEffect} from 'react';
import './Secundomer.sass';


import {FaPlay} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
import ActionButton from '../Buttons/actionButton/actionButton'


function Secundomer() {

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
    <div className='cont-secumdomer'>
      <div className='contCell'>
      <div className='timer-cellNumb'><p className='timer'>{minites}</p></div>
      <div className='timer-cellNumb'><p className='timer'>{seconds}</p></div>
      <div className='timer-cellNumb'><p className='timer'>{miliseconds}</p></div>
      </div>
      <div className='play'>
        <ActionButton icon={FaPlay} function={start} />
        <ActionButton icon={FaPause} function={stop} />
        <ActionButton icon={FaStop} function={reset} />
      </div>
    </div>
  );
}




export default Secundomer

// return (
//   <div className='content-contTimer'>
//     <Context.Provider value={{reset,start,stop}}>
//       <Timer minites={minites} seconds={seconds} miliseconds={miliseconds} switchTimer={switchTimer}/>
//     </Context.Provider>
//   </div>
// );