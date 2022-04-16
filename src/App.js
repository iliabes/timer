import './App.css';
import logo from './logo.svg';
import TopNav from './TopNav/TopNav';
import Sec from './Content/Content';
import Footer from './Footer/Footer';
import Timer from './Timer/Timer'

import {  Routes ,Route, Link} from "react-router-dom";
import {useState} from 'react';
import Canvas from './Canvas/Canvas';

import ModalWind from './ModalWind/modalWind.js'


function App() {
  const [active , setActive] = useState(false)
  return (
    <>
    <TopNav/>
 
    {/* <ModalWind active={active} setActive={setActive}/> */}
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




{/* <div className="App">
  <Header></Header> 
  <Content></Content> 
  <Footer></Footer> 
</div> */}