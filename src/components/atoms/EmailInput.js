import { createUseStyles } from 'react-jss';

const emailInputClasses = createUseStyles({
  emailInput: {},
});

function EmailInput(props) {
  const classes = emailInputClasses();
  return (
    <input
      type="email"
      className={classes.emailInput}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default EmailInput;
