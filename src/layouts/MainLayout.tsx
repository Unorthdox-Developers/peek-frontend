import { createUseStyles } from 'react-jss';

const MainLayoutClasses = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  search: {},
});

export type MainLayoutProps = {
  searchComponent: JSX.Element;
};

const MainLayout = (props: MainLayoutProps) => {
  const classes = MainLayoutClasses();
  return (
    <div className={classes.container}>
      <div className={classes.search}>{props.searchComponent}</div>
    </div>
  );
};

export default MainLayout;
