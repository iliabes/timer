
import './Content.sass';
import Circle from '../Circle/Circle.js'
import TimerCont from '../TimerCont/TimerCont'
import {FaPlay} from 'react-icons/fa';

function Header() {
  return (
    <div className="content">
      {/* <Circle/> */}
        <TimerCont/>
        <div className='content-contInfo'>
          <h1>Pomodoro</h1>
          <p>Proin id turpis libero. Phasellus ultricies molestie purus in tincidunt. Pellentesque vitae finibus ipsum. Integer porta, turpis eu tempor elementum, libero lacus convallis tortor, non vulputate dolor neque non sapien. Duis id neque blandit, vulputate dolor in, tincidunt libero. In venenatis, purus non imperdiet mollis, neque nisi rutrum lectus, in blandit lacus diam ut orci. Fusce at dolor nec est laoreet porta at at ligula. Aliquam et risus est. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies pellentesque quam id efficitur. Sed luctus, libero nec commodo mattis, lorem lorem interdum urna, sit amet laoreet nibh leo ut tellus. Nam a lacus eget metus maximus pellentesque porttitor sit amet mi. Sed vestibulum elit in ligula dapibus, eu efficitur nibh congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec semper ipsum elementum odio placerat, quis fringilla tortor interdum. Vivamus ac sem laoreet, fringilla nunc ut, placerat nulla. Aliquam ut leo varius, aliquam felis sed, rhoncus augue. </p>
        </div>
    </div>
  );
}

export default Header;


// B09F9F