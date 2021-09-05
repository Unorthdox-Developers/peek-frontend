import Button, { ButtonProps } from '@atoms/Button';
import TextInput, { TextInputProps } from '@atoms/TextInput';
import { makeStyles, createStyles } from '@material-ui/core';

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
    <div className={classes.container}>
      <TextInput {...textInputProps} />
      <Button {...buttonProps} />
    </div>
  );
};

export default SearchInput;
