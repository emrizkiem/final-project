import {
    BrowserRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
 
  import { Component } from 'react';
  import Login from "../pages/Login"
  import PaymentRequest from '../pages/payment_request';
  import Dashboard from '../pages/dashboard';

  function App() {
      return(
            <BrowserRouter>

       
        <Switch>
        <Route path="/" component={PaymentRequest} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/payment_request" component={PaymentRequest} />
        
    
      </Switch>
      
      </BrowserRouter>

      )

  }
 
  export {App}