// App.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/contact';
import HomePage from './pages/Home';
import PortfolioPage from './pages/portfolio';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} /> 
        </Routes>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
