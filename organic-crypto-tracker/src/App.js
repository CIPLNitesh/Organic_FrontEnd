import React from "react"
// Purpose: Include routing related package
// Created By: CIPL
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

// Purpose: Include pages here
// Created By: CIPL
import Main from "./pages/main";
import CallAxios from "./pages/axios";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/axios" component={CallAxios} />
      </Switch>
    </Router>
  );
}

export default App;
