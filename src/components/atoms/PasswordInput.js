import { createUseStyles } from 'react-jss';

const passwordInputClasses = createUseStyles({
  passwordInput: {},
});

function PasswordInput(props) {
  const classes = passwordInputClasses();
  return (
    <input
      type="password"
      className={classes.passwordInput}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default PasswordInput;
