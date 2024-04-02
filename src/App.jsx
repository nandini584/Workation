import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Weekly from './Pages/Weekly';
import Healing from "./Pages/Healing";
const App = () => {
  return (
    <div>
      <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/activities" element={<Activities />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/facilities" element={<Facilities />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/weekly-activities" element={<Weekly />} />
        <Route path="/healing-modalities" element={<Healing />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
    </div>
  )
}

export default App