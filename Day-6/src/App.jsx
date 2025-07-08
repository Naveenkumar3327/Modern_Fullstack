import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
