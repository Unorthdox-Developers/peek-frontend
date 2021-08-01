import RepositorySearch from '@organisms/RepositorySearch';
import MainLayout from '@layouts/MainLayout';

const MainPage = (): JSX.Element => {
  const searchValue = '';
  return (
    <MainLayout searchComponent={<RepositorySearch value={searchValue} />} />
  );
};

export default MainPage;
