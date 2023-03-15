import React from 'react';
import Navbar from './components/molecules/Navbar';
import Footer from './components/molecules/Footer';
import { CreateStyles } from './style/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Proyects from './pages/Proyects';
import Contact from './pages/Contact';
import {ToastContainer} from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <CreateStyles/>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
