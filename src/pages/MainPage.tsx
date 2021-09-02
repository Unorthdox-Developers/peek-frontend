import RepositorySearchPage from '@pages/RepositorySearchPage';
import RepositoryDashboardPage from '@pages/RepositoryDashboardPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/repositorysearch">
            <RepositorySearchPage />
          </Route>
          <Route path="/repositorydashboard">
            <RepositoryDashboardPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
