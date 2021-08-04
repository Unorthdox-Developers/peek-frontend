import { createUseStyles } from 'react-jss';

const listClasses = createUseStyles({
  list: {},
  listItem: {},
});

export type UnorderedListProps = {
  items: Array<JSX.Element>;
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
