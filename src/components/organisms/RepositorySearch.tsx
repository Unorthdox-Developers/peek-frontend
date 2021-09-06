import { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setSearchText } from '@redux/feature/repositorySearch/repositorySearch';
import { Strings } from 'src/config/constants';
import { repositorySearchAsyncThunks } from '@redux/feature/repositorySearch/asyncThunks';
import { makeStyles, createStyles } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import Loading from '@atoms/Loading';

const SearchInput = lazy(() => import('@molecules/SearchInput'));

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        margin: '1rem 0',
      },
    }),
  { name: 'organism-repository-search' }
);
export type RepositorySearchProps = {};

const RepositorySearch = (props: RepositorySearchProps) => {
  const classes = useStyles();

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
      <div className={classes.container}>
        <SearchInput {...searchInputProps} />
      </div>
    </Suspense>
  );
};

export default RepositorySearch;
