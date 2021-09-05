import RepositorySearch from '@organisms/RepositorySearch';
import RepositorySearchLayout from '@layouts/RepositorySearchLayout';

const RepositorySearchPage = () => {
  return (
    <div>
      <RepositorySearchLayout>
        {{ search: <RepositorySearch /> }}
      </RepositorySearchLayout>
    </div>
  );
};

export default RepositorySearchPage;
