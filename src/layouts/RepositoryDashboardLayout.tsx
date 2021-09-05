import { createUseStyles } from 'react-jss';

const repositoryDashboardLayoutClasses = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  dashboard: {},
});

export type RepositoryDashboardLayoutProps = {};

const RepositorySearchLayout = (props: RepositoryDashboardLayoutProps) => {
  const classes = repositoryDashboardLayoutClasses();
  return <div className={classes.container}>Dashboard</div>;
};

export default RepositorySearchLayout;
