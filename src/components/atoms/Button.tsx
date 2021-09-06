import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import Loading from './Loading';

const ButtonBase = lazy(() => import('@material-ui/core/ButtonBase'));

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        ...theme.typography.button,
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
    <Suspense fallback={<Loading />}>
      <ButtonBase classes={{ root: classes.root }} onClick={handleClick}>
        {props.text}
      </ButtonBase>
    </Suspense>
  );
};

export default Button;
