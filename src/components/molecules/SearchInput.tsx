import { ButtonProps } from '@atoms/Button';
import Loading from '@atoms/Loading';
import { TextInputProps } from '@atoms/TextInput';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { lazy, Suspense } from 'react';

const TextInput = lazy(() => import('@atoms/TextInput'));
const Button = lazy(() => import('@atoms/Button'));
const Box = lazy(() => import('@material-ui/core/Box'));

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '0.25rem 0.5rem',
      },
    }),
  { name: 'organism-repository-search' }
);
export type SearchInputProps = {
  value: string;
  placeholder: string;
  buttonText: string;
  onChangeFunction: (text: string) => void;
  onClickFunction: () => void;
  onEnterPressedFunction: () => void;
};

const SearchInput = (props: SearchInputProps) => {
  const classes = useStyles();
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
  return (
    <Suspense fallback={<Loading />}>
      <Box className={classes.container}>
        <TextInput {...textInputProps} />
        <Button {...buttonProps} />
      </Box>
    </Suspense>
  );
};

export default SearchInput;
