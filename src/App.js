import Home from "./components/Home";
import About from "./components/About";
import './sass/App.scss'
import {BrowserRouter as Router,
        Routes,
        Route} from 'react-router-dom'
import Header from "./components/Header";
import CleanMumbai from "./components/CleanMumbai";
import { useState } from "react";
import Nike from "./components/Nike";
import Burger from "./components/Burger";
import Stizer from "./components/Stizer";
import Safar from './components/Safar'
import Illustration from './components/Illustration'
import Virtual from './components/Virtual'

function App() {
  const [backColor, setBackColor] = useState(false)
  console.log('backColor', backColor)
  return (
    <Router>
      <div className="App">
      <Header backColor={backColor}setBackColor={setBackColor}/>
      <Routes>
          <Route path="/" element={<Home setBackColor={setBackColor}/>}/>
          <Route path="/practice" element={<Burger/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/clean_mumbai" element={<CleanMumbai/>} />
          <Route path="/nike" element={<Nike/>} />
          <Route path="/stizer" element={<Stizer/>} />
          <Route path="/safar" element={<Safar/>} />
          <Route path="/illustration" element={<Illustration/>} />
          <Route path="/virtual" element={<Virtual/>} />
        </Routes>
      {/* <About/> */}
      </div>
    </Router>
    
  );
}

export default App;
