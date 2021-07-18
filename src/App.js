import { createUseStyles } from 'react-jss';

const appClasses = createUseStyles({
  app: {
    width: '100%',
    height: '100%',
  },
});

const App = () => {
  const classes = appClasses();
  return <div className={classes.app}></div>;
};

export default App;
