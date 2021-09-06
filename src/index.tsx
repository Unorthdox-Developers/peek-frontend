import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import Loading from '@atoms/Loading';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
