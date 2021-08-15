import { createUseStyles } from 'react-jss';

const buttonClasses = createUseStyles({
  button: {},
});

export type ButtonProps = {
  text: string;
  onClickFunction: () => void;
};

const Button = (props: ButtonProps) => {
  const classes = buttonClasses();
  const { onClickFunction, text } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickFunction();
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
