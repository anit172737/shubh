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

function App() {
  const [backColor, setBackColor] = useState(false)
  console.log('backColor', backColor)
  return (
    <Router>
      <div className="App">
      <Header backColor={backColor}setBackColor={setBackColor}/>
      <Routes>
          <Route path="/" element={<Home setBackColor={setBackColor}/>}/>
          {/* <Route path="/work" element={<Work/>} /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/clean_mumbai" element={<CleanMumbai/>} />
          <Route path="/nike" element={<Nike/>} />
        </Routes>
      {/* <About/> */}
      </div>
    </Router>
    
  );
}

export default App;
