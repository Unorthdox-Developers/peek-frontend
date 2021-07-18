import { createUseStyles } from 'react-jss';

const buttonClasses = createUseStyles({
  button: {},
});

export interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  const classes = buttonClasses();
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
