import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';
import PaymentRequest from '../pages/payment_request';
import Dashboard from '../pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/payment_request" component={PaymentRequest} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
