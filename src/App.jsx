import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Detector from './components/Detector';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div>    
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/detector" element={<Detector />} />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
