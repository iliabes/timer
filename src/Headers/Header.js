
import '../App.css';
import TopNavButton from '../topnavButton/topnavButtin';
import './Headers.sass'
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
        <TopNavButton icon={<FaPlay/>} ></TopNavButton>
        <TopNavButton icon={<FaAdjust/>}></TopNavButton>
        <TopNavButton icon={<FaInfo/>}></TopNavButton>
        <TopNavButton icon={<FaCog/>}></TopNavButton>
      </div> 
    </div>
  )
}

export default Header;
