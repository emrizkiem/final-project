import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
  import Dashboard from "../pages/Dashboard"
  import Login from "../pages/Login"
  

  function App() {
      return(
            <BrowserRouter>

       
        <Switch>
        
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
    
      </Switch>
      
      </BrowserRouter>

      )

  }
 
  export {App}