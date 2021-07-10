import { createUseStyles } from 'react-jss';

const labelClasses = createUseStyles({
  label: {},
});

function Label(props) {
  const classes = labelClasses();
  return (
    <label className={classes.label} for={props.forId}>
      {props.text}
    </label>
  );
}

export default Label;
