import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const repositorySearchLayoutClasses = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  search: {},
});

export type RepositorySearchLayoutProps = {
  children: {
    search: ReactNode;
  };
};

const RepositorySearchLayout = (props: RepositorySearchLayoutProps) => {
  const classes = repositorySearchLayoutClasses();
  return (
    <div className={classes.container}>
      <div className={classes.search}>{props.children.search}</div>
    </div>
  );
};

export default RepositorySearchLayout;
