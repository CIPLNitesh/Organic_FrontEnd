import React from "react"
// Purpose: Include routing related package
// Created By: CIPL
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

// Purpose: Include pages here
// Created By: CIPL
import Main from "./pages/main";
import CallAxios from "./pages/axios";
import NotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/axios" component={CallAxios} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
