import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
  import Dashboard from "../pages/Dashboard"
  import Login from "../pages/login"

import generalDashboard from 'pages/general_support';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />    
        <Route  path="/dashboard" component={Dashboard} />
        
        <Route  path="/general_support" component={generalDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
