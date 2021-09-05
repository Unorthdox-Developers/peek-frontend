import { PublicRoutes } from '../config/routes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to={PublicRoutes[0].path} />
          </Route>
          {PublicRoutes.map((route, i) => (
            <Route key={i} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
