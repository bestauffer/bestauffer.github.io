import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages';
import About from '../pages/about.js';
import Contact from '../pages/contact.js';
import Projects from '../pages/projects.js';

function MainNav() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default MainNav;