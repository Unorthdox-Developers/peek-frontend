import RepositorySearch from '@organisms/RepositorySearch';
import MainLayout from '@layouts/MainLayout';
import { useAppSelector } from '@redux/hooks';
import { selectRepositorySearchValue } from '@redux/feature/repositorySearch';

const MainPage = () => {
  const searchValue = useAppSelector((state) =>
    selectRepositorySearchValue(state)
  );
  return (
    <div>
      <MainLayout>{{ search: <RepositorySearch /> }}</MainLayout>
      <h1>{searchValue}</h1>
    </div>
  );
};

export default MainPage;
