import { PublicRoutes } from '../config/routes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100%',
      },
    }),
  { name: 'app' }
);

const MainPage = () => {
  const classes = useStyles();
  return (
    <Container classes={{ root: classes.root }}>
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
    </Container>
  );
};

export default MainPage;
