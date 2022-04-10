


import './Nav.sass'
import {Link } from "react-router-dom";


function Nav(props) {
  return (
        <Link className='link' to={props.page}>{props.icon}</Link>
  )
}

export default Nav;
