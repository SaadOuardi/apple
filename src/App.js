import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Customization from './pages/Customization';
import BurgerCustomization from './pages/BurgerCustomization';

const App = () =>{
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customization" exact component={Customization} />
          <Route path="/burger" exact component={BurgerCustomization} />
        </Switch>
      </Router>
    </>
  );
};

export default App;