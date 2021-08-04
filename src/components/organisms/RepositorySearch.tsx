import SearchInput, { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { assignValue } from '@redux/feature/main/main';
import { Strings } from 'src/config/constants';

export type RepositorySearchProps = {};

const RepositorySearch = (props: RepositorySearchProps) => {
  const searchValue = useAppSelector(
    (state) => state.main.repositorySearchValue
  );
  const dispatch = useAppDispatch();

  const searchInputProps: SearchInputProps = {
    value: searchValue,
    placeholder: Strings.defaults.repositorySearch.placeholder,
    buttonText: Strings.defaults.repositorySearch.buttonText,
    changeFn: (text: string) => dispatch(assignValue(text)),
  };
  return (
    <div>
      <SearchInput {...searchInputProps} />
    </div>
  );
};

export default RepositorySearch;
