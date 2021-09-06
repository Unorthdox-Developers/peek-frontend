import Loading from '@atoms/Loading';
import { makeStyles, createStyles } from '@material-ui/core';
import { useAppSelector } from '@redux/hooks';
import { lazy, Suspense } from 'react';
// import { AsyncTrunkRequestStatus } from 'src/config/constants';

const RepositoryCard = lazy(() => import('@molecules/RepositoryCard'));

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

export type RepositorySearchResultsProps = {};

const RepositorySearchResults = (props: RepositorySearchResultsProps) => {
  const classes = useStyles();
  // const searchStatus = useAppSelector(
  //   (state) => state.repositorySearch.searchStatus
  // );
  const searchResults = useAppSelector((state) =>
    state.repositorySearch.searchResults.map((result, index) => (
      <RepositoryCard repository={result} key={`repository-card-${index}`} />
    ))
  );
  return (
    <Suspense fallback={<Loading />}>
      <div className={classes.container}>{searchResults}</div>
    </Suspense>
  );
};

export default RepositorySearchResults;
