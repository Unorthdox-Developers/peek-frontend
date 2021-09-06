import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { getCurrentTheme } from '@redux/feature/theme';
import { useAppSelector } from '@redux/hooks';
import Loading from '@atoms/Loading';

const MainPage = lazy(() => import('@pages/MainPage'));
const CssBaseline = lazy(() => import('@material-ui/core/CssBaseline'));

const App = () => {
  const currentTheme = useAppSelector((state) => getCurrentTheme(state));
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <MainPage />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
