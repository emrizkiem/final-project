import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PaymentRequest from '../pages/payment_request';
import Dashboard from '../pages/dashboard';
import Login from '../pages/Login';
import ListPayment from 'pages/ListPayment';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/dashboard" component={Dashboard} />
        <Route path="/ListPayment" component={ListPayment}/>
        <Route path="/payment_request" component={PaymentRequest} />
        
      </Switch>
    </BrowserRouter>
  );
}

export { App };
