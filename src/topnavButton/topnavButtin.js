
import '../App.css';
import '../color.sass'
import './topnavButtin.sass'



function TopNavButton(props) {
  return (


        <div className='top_nav_button'>
          {props.icon}
        </div>

  );
}

export default TopNavButton;
