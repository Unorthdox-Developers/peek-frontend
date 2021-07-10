import { createUseStyles } from 'react-jss';
import TestPage from '@pages/TestPage';

const appClasses = createUseStyles({
  app: {
    width: '100%',
    height: '100%',
  },
});

function App() {
  const classes = appClasses();
  return (
    <div className={classes.app}>
      <TestPage />
    </div>
  );
}

export default App;
