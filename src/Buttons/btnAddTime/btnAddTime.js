
import './btnAddTime.sass'



function BtnAddTime(props) {
  return (
    <button className='addTime' onClick={props.function}>{props.title}</button>

  );
}

export default BtnAddTime;
