import RepositorySearch from '@organisms/RepositorySearch';
import MainLayout from '@layouts/MainLayout';
import { useAppSelector } from '@redux/hooks';

const MainPage = () => {
  const searchValue = useAppSelector(
    (state) => state.repositorySearch.searchText
  );
  return (
    <div>
      <MainLayout searchComponent={<RepositorySearch />} />
      <h1>{searchValue}</h1>
    </div>
  );
};

export default MainPage;
