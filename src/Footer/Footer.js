import '../color.sass'
import './Footer.sass'

import {FaTelegram} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
        <div className='footer-cont'>
          <div className='footer-icon'><FaTelegram/></div>
          <div className='footer-icon'><FaEnvelope/></div>
          <div className='footer-icon'><FaGithub/></div>
        </div>
    </div>
  );
}

export default Footer;
