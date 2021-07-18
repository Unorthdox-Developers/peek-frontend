import { createUseStyles } from 'react-jss';

const listClasses = createUseStyles({
  list: {},
  listItem: {},
});

const UnorderedList = (props) => {
  const classes = listClasses();
  const listItems = props.items.map((item) => (
    <li className={classes.listItem} key={item.key}>
      {item}
    </li>
  ));
  return <ul className={classes.label}>{listItems}</ul>;
};

export default UnorderedList;
