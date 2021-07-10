import { createUseStyles } from 'react-jss';
import EmailInput from '@atoms/EmailInput';
import PasswordInput from '@atoms/PasswordInput';
import Button from '@atoms/Button';

const loginInputClasses = createUseStyles({
  loginInput: {},
});

function LoginInput() {
  const classes = loginInputClasses();
  return (
    <div className={classes.loginInput}>
      <EmailInput placeholder="Email" />
      <PasswordInput placeholder="Password" />
      <Button text="Login" />
    </div>
  );
}

export default LoginInput;
