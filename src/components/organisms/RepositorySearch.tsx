import SearchInput, { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setSearchText } from '@redux/feature/repositorySearch/repositorySearch';
import { Strings } from 'src/config/constants';
import { repositorySearchAsyncThunks } from '@redux/feature/repositorySearch/asyncThunks';

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
    onClickFunction: () =>
      dispatch(repositorySearchAsyncThunks.postRepositorySearch(searchValue)),
  };
  return (
    <div>
      <SearchInput {...searchInputProps} />
    </div>
  );
};

export default RepositorySearch;
