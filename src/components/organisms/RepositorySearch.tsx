import { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setSearchText } from '@redux/feature/repositorySearch/repositorySearch';
import { Strings } from 'src/config/constants';
import { repositorySearchAsyncThunks } from '@redux/feature/repositorySearch/asyncThunks';
import { lazy, Suspense } from 'react';
import Loading from '@atoms/Loading';

const SearchInput = lazy(() => import('@molecules/SearchInput'));

const RepositorySearch = () => {
  const searchValue = useAppSelector(
    (state) => state.repositorySearch.searchText
  );
  const dispatch = useAppDispatch();
  const searchRepositoriesFunction = () =>
    dispatch(repositorySearchAsyncThunks.postRepositorySearch(searchValue));

  const searchInputProps: SearchInputProps = {
    value: searchValue,
    placeholder: Strings.default.repositorySearch.placeholder,
    buttonText: Strings.default.repositorySearch.buttonText,
    onChangeFunction: (text: string) => dispatch(setSearchText(text)),
    onClickFunction: searchRepositoriesFunction,
    onEnterPressedFunction: searchRepositoriesFunction,
  };
  return (
    <Suspense fallback={<Loading />}>
      <SearchInput {...searchInputProps} />
    </Suspense>
  );
};

export default RepositorySearch;
