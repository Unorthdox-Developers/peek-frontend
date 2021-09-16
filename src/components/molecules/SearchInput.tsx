import { Suspense, lazy } from 'react';
import { ButtonProps } from '@atoms/Button';
import Loading from '@atoms/Loading';
import { TextInputProps } from '@atoms/TextInput';
import { makeStyles, createStyles } from '@material-ui/core';
import { AsyncTrunkRequestStatus } from 'src/config/constants';
import { Strings } from 'src/config/constants';

const Box = lazy(() => import('@material-ui/core/Box'));
const TextInput = lazy(() => import('@atoms/TextInput'));
const Button = lazy(() => import('@atoms/Button'));

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      inputContainer: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
    }),
  { name: 'organism-repository-search' }
);
export type SearchInputProps = {
  value: string;
  placeholder: string;
  buttonText: string;
  searchStatus: AsyncTrunkRequestStatus;
  searchResultsCount: number;
  onChangeFunction: (text: string) => void;
  onClickFunction: () => void;
  onEnterPressedFunction: () => void;
};

const SearchInput = (props: SearchInputProps) => {
  const classes = useStyles();
  const { searchStatus, searchResultsCount } = props;
  const textInputProps: TextInputProps = {
    value: props.value,
    placeholder: props.placeholder,
    onChangeFunction: props.onChangeFunction,
    onEnterPressedFunction: props.onEnterPressedFunction,
  };
  const buttonProps: ButtonProps = {
    text: props.buttonText,
    onClickFunction: props.onClickFunction,
  };
  const resultsText = Strings.dynamic.results(searchResultsCount);
  const resultsElement = (
    <span
      style={{
        display:
          searchStatus === AsyncTrunkRequestStatus.Initial ? 'none' : 'block',
      }}
    >
      {searchResultsCount} {resultsText}
    </span>
  );
  return (
    <Suspense fallback={<Loading />}>
      <Box className={classes.container}>
        <Box className={classes.inputContainer}>
          <TextInput {...textInputProps} />
          {resultsElement}
        </Box>
        <Button {...buttonProps} />
      </Box>
    </Suspense>
  );
};

export default SearchInput;
