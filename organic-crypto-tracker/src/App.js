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
import ReactQuery from "./pages/reactquery";

// Purpose: Include react-query related packages
// Created By: CIPL
import { QueryClient, QueryClientProvider } from "react-query"

//Purpose: Created QueryClient Object
// Created By: CIPL
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/axios" component={CallAxios} />
          <Route path="/reactquery" component={ReactQuery} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
