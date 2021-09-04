import { ButtonBase } from '@material-ui/core';
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
    <ButtonBase classes={{ root: classes.button }} onClick={handleClick}>
      {text}
    </ButtonBase>
  );
};

export default Button;
