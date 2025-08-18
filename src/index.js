import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About_page';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Product from './landing_page/products/productPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import Notfound from './landing_page/notfound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/About_page" element={<About/>} />
      <Route path="/PricingPage" element={<Pricing/>} />
      <Route path="/SupportPage" element={<Support/>} />
      <Route path="/productPage" element={<Product/>} />
      <Route path="*" element={<Notfound/>} />

    </Routes>
     <Footer/>
    </BrowserRouter>
   
  </React.StrictMode>
);


