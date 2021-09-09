import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'

  import { Component } from 'react';
  import Login from "../pages/Login"
  import Dashboard from "../pages/Dashboard"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />    
        <Route  path="/dashboard" component={Dashboard} />
        
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
    
      </Switch>
    </BrowserRouter>
  );
}

export { App };
