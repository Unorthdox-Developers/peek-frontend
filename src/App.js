import { createUseStyles } from "react-jss";
import TestPage from "@pages/TestPage";

const appClasses = createUseStyles({
  app: {},
});

function App() {
  const classes = appClasses();
  return (
    <div className={classes.app}>
      <TestPage/>
    </div>
  );
}

export default App;
