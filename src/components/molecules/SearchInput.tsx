import { ButtonProps } from '@atoms/Button';
import Loading from '@atoms/Loading';
import { TextInputProps } from '@atoms/TextInput';
import { makeStyles, createStyles } from '@material-ui/core';
import { lazy, Suspense } from 'react';

const TextInput = lazy(() => import('@atoms/TextInput'));
const Button = lazy(() => import('@atoms/Button'));

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
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
      <div className={classes.container}>
        <TextInput {...textInputProps} />
        <Button {...buttonProps} />
      </div>
    </Suspense>
  );
};

export default SearchInput;
