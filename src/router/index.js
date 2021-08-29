import {
    BrowserRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
 
  import { Component } from 'react';
  import Login from "../pages/Login"

  function App() {
      return(
            <BrowserRouter>

       
        <Switch>
        
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
    
      </Switch>
      
      </BrowserRouter>

      )

  }
 
  export {App}