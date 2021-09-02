import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PaymentRequest from '../pages/payment_request';
import Dashboard from '../pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/" component={Dashboard} />
        <Route path="/payment_request" component={PaymentRequest} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
