import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

const TextInput = (props) => {
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
