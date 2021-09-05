import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import MainPage from '@pages/MainPage';
import { getCurrentTheme } from '@redux/feature/theme';
import { useAppSelector } from '@redux/hooks';

const App = () => {
  const currentTheme = useAppSelector((state) => getCurrentTheme(state));
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
