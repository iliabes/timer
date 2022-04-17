
import '../App.css';
import TopNavButton from '../Buttons/topnavButton/topnavButtin';
import Nav from '../Buttons/nav/Nav';
import './TopNav.sass'
import {FaGrav} from 'react-icons/fa';
import {FaStopwatch} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa'



function Header() {
  return (
    <div className="top-nav">
      <div className='logo'>
        <TopNavButton icon={<FaGrav/>}></TopNavButton>
      </div>
      <div className='nav-button'>
        <Nav icon={<FaClock/>} page={'/sec'}/>
        <Nav icon={<FaStopwatch/>} page={'./timer'}/>
      </div> 

      

    </div>
  )
}

export default Header;
