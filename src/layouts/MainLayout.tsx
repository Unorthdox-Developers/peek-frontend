import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const mainLayoutClasses = createUseStyles(
  {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    search: {},
  },
  { name: 'layout' }
);

export type MainLayoutProps = {
  children: {
    search: ReactNode;
  };
};

const MainLayout = (props: MainLayoutProps) => {
  const classes = mainLayoutClasses();
  return (
    <div className={classes.container}>
      <div className={classes.search}>{props.children.search}</div>
    </div>
  );
};

export default MainLayout;
