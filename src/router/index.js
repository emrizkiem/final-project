import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'

  import { Component } from 'react';
  import Login from "../pages/login"
  import Dashboard from "../pages/git "
  import generalDashboard from 'pages/general_support';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />   
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/general_support" component={generalDashboard} />
    
      </Switch>
    </BrowserRouter>
  );
}

export { App };
