import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Customization from './pages/Customization';
import BurgerCustomization from './pages/BurgerCustomization';

const App = () => {
  return (
    <Router basename='/apple'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/product" element={<BurgerCustomization />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;