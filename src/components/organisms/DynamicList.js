import { createUseStyles } from 'react-jss';
import EntryWithSubmit from '@molecules/EntryWithSubmit';
import List from '@atoms/List';

const dynamicListClasses = createUseStyles({
  dynamicList: {},
});

function DynamicList() {
  const classes = dynamicListClasses();
  return (
    <div className={classes.dynamicList}>
      <EntryWithSubmit />
      <List items={[]} />
    </div>
  );
}

export default DynamicList;
