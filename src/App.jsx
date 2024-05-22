import React from 'react';
import Home from './pages/Home/Home'
import Wishlist from  './pages/Wishlist/Wishlist'
import Karzenka from './pages/Karzenka/Karzenka.jsx'
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/wishlist" element={<Wishlist/>} />
    <Route path="/karzenka" element={<Karzenka/>} />
   
  </Routes>
    </div>
  );
}

export default App;
