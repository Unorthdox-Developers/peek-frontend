import SearchInput, { SearchInputProps } from '@molecules/SearchInput';

export interface IRepositorySearchProps {
  value: string;
}

export class RepositorySearchProps implements IRepositorySearchProps {
  value: string = '';
}

const RepositorySearch = (props: IRepositorySearchProps) => {
  const searchInputProps = new SearchInputProps(
    props.value,
    'Search Repository',
    'Search'
  );
  return (
    <div>
      <SearchInput {...searchInputProps} />
    </div>
  );
};

export default RepositorySearch;
