import { createStyles, makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100%',
    },
    themeSwitch: {
      display: 'none',
    },
    search: {},
    results: {},
  })
);

export type RepositorySearchLayoutProps = {
  children: {
    themeSwitch: ReactNode;
    search: ReactNode;
    results: ReactNode;
  };
};

const RepositorySearchLayout = (props: RepositorySearchLayoutProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.themeSwitch}>{props.children.themeSwitch}</div>
      <div>{props.children.search}</div>
      <div>{props.children.results}</div>
    </div>
  );
};

export default RepositorySearchLayout;
