import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import generalDashboard from '../pages/general_support';
import '../styles/index.css';
import adminDashboard from '../pages/admin';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/general_support" component={generalDashboard} />
        <Route exact path="/admin" component={adminDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
