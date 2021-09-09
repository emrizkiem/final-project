import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
  import Dashboard from "../pages/Dashboard"
  import Login from "../pages/login"
  
import PaymentRequest from '../pages/payment_request';
import ListPayment from 'pages/ListPayment';
import generalDashboard from 'pages/general_support';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />    
        <Route  path="/dashboard" component={Dashboard} />
        <Route path="/ListPayment" component={ListPayment}/>
        <Route path="/payment_request" component={PaymentRequest} />
        <Route  path="/general_support" component={generalDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
