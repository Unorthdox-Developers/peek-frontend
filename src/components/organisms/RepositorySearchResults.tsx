import { makeStyles, createStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import RepositoryCard from '@molecules/RepositoryCard';
import { useAppSelector } from '@redux/hooks';
import { AsyncTrunkRequestStatus } from 'src/config/constants';

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

  const searchStatus = useAppSelector(
    (state) => state.repositorySearch.searchStatus
  );

  const searchResults = useAppSelector((state) =>
    state.repositorySearch.searchResults.map((result, index) => (
      <RepositoryCard repository={result} key={`repository-card-${index}`} />
    ))
  );
  if (searchStatus === AsyncTrunkRequestStatus.Pending) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else {
    return <div className={classes.container}>{searchResults}</div>;
  }
};

export default RepositorySearchResults;
