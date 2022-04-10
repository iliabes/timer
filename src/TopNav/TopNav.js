
import '../App.css';
import TopNavButton from '../Buttons/topnavButton/topnavButtin';
import Nav from '../Buttons/nav/Nav';
import './TopNav.sass'
import {FaPlay} from 'react-icons/fa';
import {FaCog} from 'react-icons/fa';
import {FaGrav} from 'react-icons/fa';
import {FaAdjust} from 'react-icons/fa';
import {FaStopwatch} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa'
import {Link } from "react-router-dom";


function Header() {
  return (
    <div className="top-nav">
      <div className='logo'>
        <TopNavButton icon={<FaGrav/>}></TopNavButton>
      </div>
      <div className='nav-button'>

        {/* <TopNavButton  icon={<FaPlay/>}></TopNavButton>
        <TopNavButton icon={<FaInfo/>}></TopNavButton>
        <TopNavButton icon={<FaCog/>}></TopNavButton> */}
        <Nav icon={<FaClock/>} page={'/sec'}/>
        <Nav icon={<FaStopwatch/>} page={'./timer'}/>
        <TopNavButton icon={<FaAdjust/>}></TopNavButton>
      </div> 

      

    </div>
  )
}

export default Header;
{/*  */}