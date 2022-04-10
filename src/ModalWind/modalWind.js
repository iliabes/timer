import React ,{ useState }from 'react';
import './modal.sass'



function ModalWind(props) {
const [active , setActive] = useState(true)
  return (
      <div className='modal-wind'>
        <button onClick={()=>{setActive(true)}}>:)</button>
        <div className={props.active ? 'active' : 'noActive'} >
            <button onClick = {()=>{props.setActive(false)}}></button>
        </div>
    </div>
  )
}

export default ModalWind;
{/*  */}