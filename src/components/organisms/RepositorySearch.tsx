import SearchInput, { SearchInputProps } from '@molecules/SearchInput';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { setSearchText } from '@redux/feature/repositorySearch';
import { Strings } from 'src/config/constants';
import { createUseStyles } from 'react-jss';

export type RepositorySearchProps = {};

const repositorySearchClasses = createUseStyles(
  () => ({
    repositorySearchButton: {},
  }),
  { name: 'organism' }
);

const RepositorySearch = (props: RepositorySearchProps) => {
  const classes = repositorySearchClasses();
  const searchValue = useAppSelector(
    (state) => state.repositorySearch.searchText
  );
  const dispatch = useAppDispatch();

  const searchInputProps: SearchInputProps = {
    value: searchValue,
    placeholder: Strings.default.repositorySearch.placeholder,
    buttonText: Strings.default.repositorySearch.buttonText,
    buttonClasses: [classes.repositorySearchButton],
    onChangeFunction: (text: string) => dispatch(setSearchText(text)),
    onClickFunction: () => {
      return;
    },
  };
  return (
    <div>
      <SearchInput {...searchInputProps} />
    </div>
  );
};

export default RepositorySearch;
