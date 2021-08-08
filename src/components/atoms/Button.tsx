import { createUseStyles, useTheme } from 'react-jss';
import { BaseTheme } from 'src/styles/theme';

const useStyles = createUseStyles(
  (theme: BaseTheme) => ({
    button: {
      color: theme.primaryTextColor,
    },
  }),
  { name: 'atom' }
);

export type ButtonProps = {
  text: string;
  styles: string[];
  onClickFunction: () => void;
};

const Button = (props: ButtonProps) => {
  const theme = useTheme<BaseTheme>();
  const styles = useStyles({ theme });
  const buttonClasses = `${styles.button} ${props.styles.join(' ')}`;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClickFunction();
  };
  return (
    <button className={buttonClasses} onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
