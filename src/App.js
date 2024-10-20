import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Customization from './pages/Customization';
import BurgerCustomization from './pages/BurgerCustomization';

const App = () =>{
  return (
    <>
    <Router>
      <Routes>
        <Route path="/apple" element={<Home />} />
        <Route path="apple/customization" element={<Customization />} />
        <Route path="apple/product" element={<BurgerCustomization />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;