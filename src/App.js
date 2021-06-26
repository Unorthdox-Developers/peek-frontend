import { createUseStyles } from "react-jss";

const appClasses = createUseStyles({
  app: {},
});

function App() {
  const classes = appClasses();
  return <div className={classes.app}></div>;
}

export default App;
