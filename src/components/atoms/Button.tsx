import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import Loading from './Loading';

const ButtonBase = lazy(() => import('@material-ui/core/ButtonBase'));

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        ...theme.typography.button,
        padding: '0.25rem 0.5rem',
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

  const handleClick = () => {
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
