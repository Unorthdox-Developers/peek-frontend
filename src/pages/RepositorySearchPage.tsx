import RepositorySearch from '@organisms/RepositorySearch';
import RepositorySearchLayout from '@layouts/RepositorySearchLayout';
import RepositorySearchResults from '@organisms/RepositorySearchResults';
import ThemeSwitch from '@molecules/ThemeSwitch';

const RepositorySearchPage = () => {
  return (
    <div>
      <RepositorySearchLayout>
        {{
          search: <RepositorySearch />,
          results: <RepositorySearchResults />,
          themeSwitch: <ThemeSwitch />,
        }}
      </RepositorySearchLayout>
    </div>
  );
};

export default RepositorySearchPage;
