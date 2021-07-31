import { createUseStyles } from 'react-jss';

const MainLayoutClasses = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  search: {},
});

export interface IMainLayoutProps {
  searchComponent: JSX.Element;
}

export class MainLayoutProps implements IMainLayoutProps {
  searchComponent: JSX.Element = (<div></div>);

  constructor(searchComponent: JSX.Element) {
    this.searchComponent = searchComponent;
  }
}

const MainLayout = (props: IMainLayoutProps): JSX.Element => {
  const classes = MainLayoutClasses();
  return (
    <div className={classes.container}>
      <div className={classes.search}>{props.searchComponent}</div>
    </div>
  );
};

export default MainLayout;
