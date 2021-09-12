import Loading from '@atoms/Loading';
import { makeStyles, createStyles } from '@material-ui/core';
import { useAppSelector } from '@redux/hooks';
import { lazy, Suspense } from 'react';

const RepositoryCard = lazy(() => import('@molecules/RepositoryCard'));
const Box = lazy(() => import('@material-ui/core/Box'));

const useStyles = makeStyles(
  () =>
    createStyles({
      container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    }),
  { name: 'organism-repository-search-results' }
);

const RepositorySearchResults = () => {
  const classes = useStyles();
  const searchResults = useAppSelector((state) =>
    state.repositorySearch.searchResults.map((result, index) => (
      <RepositoryCard repository={result} key={index} />
    ))
  );
  return (
    <Suspense fallback={<Loading />}>
      <Box className={classes.container}>{searchResults}</Box>
    </Suspense>
  );
};

export default RepositorySearchResults;
