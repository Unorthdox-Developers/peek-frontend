import { createStyles, makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
      themeSwitch: {
        display: 'none',
      },
      search: {
        width: '100%',
      },
      results: {
        width: '100%',
      },
    }),
  { name: 'repository-search-layout' }
);

export type RepositorySearchLayoutProps = {
  themeSwitch: ReactNode;
  search: ReactNode;
  results: ReactNode;
};

const RepositorySearchLayout = (props: RepositorySearchLayoutProps) => {
  const classes = useStyles();
  const { themeSwitch, search, results } = props;
  return (
    <div className={classes.container}>
      <div aria-checked="false" className={classes.themeSwitch}>
        {themeSwitch}
      </div>
      <div className={classes.search}>{search}</div>
      <div className={classes.results}>{results}</div>
    </div>
  );
};

export default RepositorySearchLayout;
