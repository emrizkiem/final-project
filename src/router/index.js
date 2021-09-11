import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'

  import { Component } from 'react';
  import Login from "../pages/login"
  import Dashboard from "../pages/dashboard"
  import generalDashboard from 'pages/general_support';
  import DashboardPayment from 'pages/dashboard/dashboard_rada';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />   
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/general_support" component={generalDashboard} />
        <Route path="/DashboardPayment" component={DashboardPayment} />
    
      </Switch>
    </BrowserRouter>
  );
}

export { App };
