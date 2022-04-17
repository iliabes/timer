import './App.css';

import TopNav from './TopNav/TopNav';

import Sec from './Secundomer/Secundomer'
import Footer from './Footer/Footer';
import Timer from './Timer/Timer'

import {  Routes ,Route} from "react-router-dom";
import Canvas from './Canvas/Canvas';




function App() {
  return (
    <>
    <TopNav/>
    <Routes>
      <Route path="/sec" element={<Sec />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="*" element={<Timer />} />
    </Routes>
    <Canvas/>
    <Footer/>
    </>
  )}
export default App;




