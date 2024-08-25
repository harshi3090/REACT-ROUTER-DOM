import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Menu } from './pages/Menu';
import { Home } from './pages/Home';
function App() {
    
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<h1>Hello</h1>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
