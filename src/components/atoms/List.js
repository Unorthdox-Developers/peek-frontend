import { createUseStyles } from 'react-jss';
import ListItem from '@atoms/ListItem';

const listClasses = createUseStyles({
  list: {},
});

function List(props) {
  const classes = listClasses();
  const listItems = props.items.map((item) => <ListItem item={item} />);
  return <ul className={classes.label}>{listItems}</ul>;
}

export default List;
