import { ButtonBase, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        color: theme.palette.text.primary,
      },
    }),
  { name: 'atom-button' }
);

export type ButtonProps = {
  text: string;
  onClickFunction: () => void;
};

const Button = (props: ButtonProps) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClickFunction();
  };
  return (
    <ButtonBase classes={{ root: classes.root }} onClick={handleClick}>
      {props.text}
    </ButtonBase>
  );
};

export default Button;
