import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    if (!cart.some(i => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const addToWishlist = (id) =>
    setWishlist(wishlist.includes(id) ? wishlist.filter(w => w !== id) : [...wishlist, id]);

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
          <footer className="bg-black text-white text-center py-3 footer-fixed">
            <p>© 2025 Pizza Hut. All rights reserved.</p>
          </footer>
    </>
  );
};

export default App;

