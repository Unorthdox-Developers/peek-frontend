import SearchInput, { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setSearchText } from '@redux/feature/repositorySearch';
import { Strings } from 'src/config/constants';

export type RepositorySearchProps = {};

const RepositorySearch = (props: RepositorySearchProps) => {
  const searchValue = useAppSelector(
    (state) => state.repositorySearch.searchText
  );
  const dispatch = useAppDispatch();

  const searchInputProps: SearchInputProps = {
    value: searchValue,
    placeholder: Strings.default.repositorySearch.placeholder,
    buttonText: Strings.default.repositorySearch.buttonText,
    onChangeFunction: (text: string) => dispatch(setSearchText(text)),
  };
  return (
    <div>
      <SearchInput {...searchInputProps} />
    </div>
  );
};

export default RepositorySearch;
