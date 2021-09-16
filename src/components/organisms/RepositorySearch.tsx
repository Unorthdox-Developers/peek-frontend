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
  const searchStatus = useAppSelector(
    (state) => state.repositorySearch.searchStatus
  );
  const searchResultsCount = useAppSelector(
    (state) => state.repositorySearch.totalResultsCount
  );
  const dispatch = useAppDispatch();
  const searchRepositoriesFunction = () =>
    dispatch(repositorySearchAsyncThunks.postRepositorySearch(searchValue));

  const searchInputProps: SearchInputProps = {
    value: searchValue,
    placeholder: Strings.default.repositorySearch.placeholder,
    buttonText: Strings.default.repositorySearch.buttonText,
    searchStatus: searchStatus,
    searchResultsCount: searchResultsCount,
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
