import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
