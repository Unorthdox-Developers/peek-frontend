import Loading from '@atoms/Loading';
import { RepositoryDashboardLayoutProps } from '@layouts/RepositoryDashboardLayout';
import { lazy, Suspense } from 'react';

const RepositoryDashboardLayout = lazy(
  () => import('@layouts/RepositoryDashboardLayout')
);

const RepositoryDashboardPage = () => {
  const layoutProps: RepositoryDashboardLayoutProps = {
    contributers: <div>Contributers</div>,
  };
  return (
    <Suspense fallback={<Loading />}>
      <RepositoryDashboardLayout {...layoutProps} />
    </Suspense>
  );
};

export default RepositoryDashboardPage;
