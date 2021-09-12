import Loading from '@atoms/Loading';
import { createStyles, makeStyles } from '@material-ui/core';
import { lazy, ReactNode, Suspense } from 'react';

const Box = lazy(() => import('@material-ui/core/Box'));

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
    <Suspense fallback={<Loading />}>
      <Box className={classes.container}>
        <Box aria-checked="false" className={classes.themeSwitch}>
          {themeSwitch}
        </Box>
        <Box className={classes.search}>{search}</Box>
        <Box className={classes.results}>{results}</Box>
      </Box>
    </Suspense>
  );
};

export default RepositorySearchLayout;
