import { createUseStyles } from 'react-jss';

const textInputClasses = createUseStyles({
  textInput: {},
});

function TextInput(props) {
  const classes = textInputClasses();
  return (
    <input
      type="text"
      className={classes.textInput}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default TextInput;
