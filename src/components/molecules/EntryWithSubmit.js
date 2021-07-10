import { createUseStyles } from 'react-jss';
import TextInput from '@atoms/TextInput';
import Button from '@atoms/Button';

const entryWithSubmitClasses = createUseStyles({
  container: {},
  entry: {},
  submitButton: {},
});

function EntryWithSubmit() {
  const classes = entryWithSubmitClasses();
  return (
    <div className={classes.container}>
      <TextInput className={classes.entry} />
      <Button className={classes.submitButton} text="Submit" />
    </div>
  );
}

export default EntryWithSubmit;
