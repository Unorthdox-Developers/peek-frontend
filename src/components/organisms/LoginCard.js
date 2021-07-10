import { createUseStyles } from 'react-jss';
import LoginInput from '@molecules/LoginInput';
import Icon from '@atoms/Icon';
import Link from '@atoms/Link';

const loginCardClasses = createUseStyles({
  loginCard: {},
});

function LoginCard() {
  const classes = loginCardClasses();
  return (
    <div className={classes.loginCard}>
      <Icon />
      <LoginInput />
      <Link text="forgot password" />
    </div>
  );
}

export default LoginCard;
