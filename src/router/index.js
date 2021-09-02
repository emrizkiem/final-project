import {
    BrowserRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
 
  import { Component } from 'react';
  import Login from "../pages/Login"
  import ListPayment from "../pages/ListPayment"

  function App() {
      return(
            <BrowserRouter>

       
        <Switch>
        
        
        <Route exact path="/" component={ListPayment} />
        <Route path="/ListPayment" component={ListPayment} />
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login}/>

    
      </Switch>
      
      </BrowserRouter>

      )

  }
 
  export {App}