import { createUseStyles } from 'react-jss';

const buttonClasses = createUseStyles({
  button: {},
});

function Button(props) {
  const classes = buttonClasses();
  return <button className={classes.button}>{props.text}</button>;
}

export default Button;
