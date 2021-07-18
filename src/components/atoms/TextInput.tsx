import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

export interface ITextInputProps {
  value: string;
  placeholder: string;
}

const TextInput = (props: ITextInputProps) => {
  const classes = textInputClasses();
  return (
    <input
      type="text"
      className={classes.textInput}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;
