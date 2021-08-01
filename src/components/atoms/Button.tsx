import { createUseStyles } from 'react-jss';

const buttonClasses = createUseStyles({
  button: {},
});

export interface IButtonProps {
  text: string;
}

export class ButtonProps implements IButtonProps {
  text: string = '';

  constructor(text: string) {
    this.text = text;
  }
}

const Button = (props: IButtonProps) => {
  const classes = buttonClasses();
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
