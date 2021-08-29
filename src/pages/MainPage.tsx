import RepositorySearch from '@organisms/RepositorySearch';
import MainLayout from '@layouts/MainLayout';

const MainPage = () => {
  return (
    <div>
      <MainLayout>{{ search: <RepositorySearch /> }}</MainLayout>
    </div>
  );
};

export default MainPage;
