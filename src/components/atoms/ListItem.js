import { createUseStyles } from 'react-jss';

const listItemClasses = createUseStyles({
  listItem: {},
});

function ListItem(props) {
  const classes = listItemClasses();
  return <li className={classes.label}>{props.item}</li>;
}

export default ListItem;
