import { ThemeProvider } from '@material-ui/core';
import MainPage from '@pages/MainPage';
import { getCurrentTheme } from '@redux/feature/theme';
import { useAppSelector } from '@redux/hooks';

const App = () => {
  const currentTheme = useAppSelector((state) => getCurrentTheme(state));
  return (
    <ThemeProvider theme={{ ...currentTheme }}>
      <div>
        <MainPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
