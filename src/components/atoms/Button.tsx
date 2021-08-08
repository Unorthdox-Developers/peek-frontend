import { createUseStyles } from 'react-jss';

const buttonClasses = createUseStyles({
  button: {},
});

export type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => {
  const classes = buttonClasses();
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
