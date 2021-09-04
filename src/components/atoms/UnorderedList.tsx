export type UnorderedListProps = {
  items: Array<JSX.Element>;
  placeholder: string;
};

const UnorderedList = (props: UnorderedListProps) => {
  const listItems = props.items.map((item) => <li key={item.key}>{item}</li>);
  return <ul>{listItems}</ul>;
};

export default UnorderedList;
