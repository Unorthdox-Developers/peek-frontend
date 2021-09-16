import Loading from '@atoms/Loading';
import { lazy, ReactNode, Suspense } from 'react';

const Box = lazy(() => import('@material-ui/core/Box'));

export type RepositoryDashboardLayoutProps = {
  contributers: ReactNode;
};

const RepositoryDashboardLayout = (props: RepositoryDashboardLayoutProps) => {
  const { contributers } = props;
  return (
    <Suspense fallback={<Loading />}>
      <Box>
        <Box>{{ contributers }}</Box>
      </Box>
    </Suspense>
  );
};

export default RepositoryDashboardLayout;
