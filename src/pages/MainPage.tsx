import RepositorySearch from '@organisms/RepositorySearch';
import MainLayout from '@layouts/MainLayout';
import { useAppSelector } from '@redux/hooks';
import { getRepositorySearchStatus } from '@redux/feature/repositorySearch/repositorySearch';

const MainPage = () => {
  const searchStatus = useAppSelector((state) =>
    getRepositorySearchStatus(state)
  );
  return (
    <div>
      <MainLayout>{{ search: <RepositorySearch /> }}</MainLayout>
      <h1>{searchStatus}</h1>
    </div>
  );
};

export default MainPage;
