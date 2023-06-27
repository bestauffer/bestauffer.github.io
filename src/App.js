import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about.js';
import Projects from './pages/projects.js';
 
function App() {
    return (
      <div class="app-container">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/projects' element={<Projects />} />
            </Routes>
        </Router>
      </div>
    );
}
 
export default App;
