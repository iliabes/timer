import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import '../App.css';
import TopNavButton from '../topnavButton/topnavButtin';
import Content from '../Content/Content.js';
import './Headers.sass'
import Timer2 from'../Timer2/Timer2.js'
import {FaPlay} from 'react-icons/fa';
import {FaCog} from 'react-icons/fa';
import {FaGrav} from 'react-icons/fa';
import {FaAdjust} from 'react-icons/fa';
import {FaInfo} from 'react-icons/fa';


function Header() {
  return (
    <div className="top-nav">
      <div className='logo'>
        <TopNavButton icon={<FaGrav/>}></TopNavButton>
      </div>
      <div className='nav-button'>

        <TopNavButton  icon={<FaPlay/>}></TopNavButton>
        <TopNavButton icon={<FaInfo/>}></TopNavButton>
        <TopNavButton icon={<FaCog/>}></TopNavButton>
        <TopNavButton icon={<FaAdjust/>}></TopNavButton>
      </div> 

      {/* <BrowserRouter>
      <Routes>
       <Route path="/" element={<Content />} />
       <Route path="/sek" element={<Timer2 />} />
      </Routes>
    </BrowserRouter> */}

    </div>
  )
}

export default Header;
{/*  */}