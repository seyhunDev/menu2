
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menuone from './components/Menuone';





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/menuone" element={< Menuone/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
