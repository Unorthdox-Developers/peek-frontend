import Loading from '@atoms/Loading';
import { RepositorySearchLayoutProps } from '@layouts/RepositorySearchLayout';
import { lazy, Suspense } from 'react';

const RepositorySearch = lazy(() => import('@organisms/RepositorySearch'));
const RepositorySearchLayout = lazy(
  () => import('@layouts/RepositorySearchLayout')
);
const RepositorySearchResults = lazy(
  () => import('@organisms/RepositorySearchResults')
);
const ThemeSwitch = lazy(() => import('@molecules/ThemeSwitch'));

const RepositorySearchPage = () => {
  const layoutProps: RepositorySearchLayoutProps = {
    search: <RepositorySearch />,
    results: <RepositorySearchResults />,
    themeSwitch: <ThemeSwitch />,
  };
  return (
    <Suspense fallback={<Loading />}>
      <RepositorySearchLayout {...layoutProps} />
    </Suspense>
  );
};

export default RepositorySearchPage;
