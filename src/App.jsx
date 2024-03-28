import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Activities from './Pages/Activities';
import About from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Facilities from './Pages/Facilities';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import NavbarMini from './Components/NavbarMini';
const App = () => {
  return (
    <div>
      <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
    </div>
  )
}

export default App