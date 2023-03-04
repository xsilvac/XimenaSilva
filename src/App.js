import React from 'react';
import Navbar from './components/molecules/Navbar';
import Footer from './components/molecules/Footer';
import { CreateStyles } from './style/global';

function App() {
  return (
    <>
      <CreateStyles/>
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
