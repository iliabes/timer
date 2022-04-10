
import './btnSetTime.sass'



function BtnSetTime(props) {
  return (
    <button className='setTime' onClick={props.function}>{props.title}</button>

  );
}

export default BtnSetTime;
