import { createUseStyles } from 'react-jss';

const listClasses = createUseStyles({
  list: {},
  listItem: {},
});

type UnorderedListProps = {
  items: Array<any>;
  placeholder: string;
};

const UnorderedList = (props: UnorderedListProps) => {
  const classes = listClasses();
  const listItems = props.items.map((item) => (
    <li className={classes.listItem} key={item.key}>
      {item}
    </li>
  ));
  return <ul className={classes.list}>{listItems}</ul>;
};

export default UnorderedList;
