import logo from './logo.svg';
import Header from './Headers/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './App.css';
import {  Routes ,Route, Link} from "react-router-dom";
import Page1 from './Page1'
import Page2 from './Page2'
import ModalWind from './ModalWind/modalWind.js'
import {useState} from 'react';

function App() {
  const [active , setActive] = useState(false)
  return (
    <>
    <Header/>
    <button onClick={()=>{setActive(true)}}>:)</button>
    <ModalWind active={active} setActive={setActive}/>
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="*" element={<Page2 />} />
    </Routes>
    <Footer/>
    </>
  )}
export default App;




{/* <div className="App">
  <Header></Header> 
  <Content></Content> 
  <Footer></Footer> 
</div> */}