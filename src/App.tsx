import MainPage from '@pages/MainPage';
import { getCurrentTheme } from '@redux/feature/theme';
import { useAppSelector } from '@redux/hooks';
import { createUseStyles, JssProvider, ThemeProvider } from 'react-jss';

const appClasses = createUseStyles({
  app: {
    width: '100%',
    height: '100%',
  },
});

const App = () => {
  const classes = appClasses();
  const currentTheme = useAppSelector((state) => getCurrentTheme(state));
  return (
    <JssProvider>
      <ThemeProvider theme={currentTheme}>
        <div className={classes.app}>
          <MainPage />
        </div>
      </ThemeProvider>
    </JssProvider>
  );
};

export default App;
