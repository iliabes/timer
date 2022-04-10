
// import '~/App.css';
// import '../color.sass'
import './actionButton.sass'



function ActionButton(props) {
  // console.log(props.function);
  return (


        <div onClick={props.function} className='actionBtn'>
          {<props.icon/>}
        </div>

  );
}

export default ActionButton;
