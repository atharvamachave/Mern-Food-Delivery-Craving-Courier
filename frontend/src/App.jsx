import React from 'react';
import Navbar from './components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlacedOrder from './pages/PlacedOrder/PlacedOrder';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlacedOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
