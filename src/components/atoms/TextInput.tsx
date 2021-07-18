import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

type TextInputProps = {
  value: string;
  placeholder: string;
};

const TextInput = (props: TextInputProps) => {
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
