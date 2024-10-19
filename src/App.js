import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Customization from './pages/Customization';

const App = () =>{
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customization" exact component={Customization} />
        </Switch>
      </Router>
    </>
  );
};

export default App;