import SearchInput, { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setSearchText } from '@redux/feature/repositorySearch/repositorySearch';
import { Strings } from 'src/config/constants';
import { repositorySearchAsyncThunks } from '@redux/feature/repositorySearch/asyncThunks';
import { makeStyles, createStyles } from '@material-ui/core';

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
    <div className={classes.container}>
      <SearchInput {...searchInputProps} />
    </div>
  );
};

export default RepositorySearch;
