import { lazy, Suspense } from 'react';
import { PublicRoutes } from '../config/routes';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Loading from '@atoms/Loading';

const Container = lazy(() => import('@material-ui/core/Container'));

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
      },
    }),
  { name: 'app' }
);

const MainPage = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Container classes={{ root: classes.root }}>
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
        </Container>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainPage;
