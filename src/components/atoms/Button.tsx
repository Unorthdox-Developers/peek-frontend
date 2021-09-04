import { ButtonBase } from '@material-ui/core';

export type ButtonProps = {
  text: string;
  onClickFunction: () => void;
};

const Button = (props: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClickFunction();
  };
  return <ButtonBase onClick={handleClick}>{props.text}</ButtonBase>;
};

export default Button;
