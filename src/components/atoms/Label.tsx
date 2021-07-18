import { createUseStyles } from 'react-jss';

const labelClasses = createUseStyles({
  label: {},
});

type LabelProps = {
  text: string;
};

const Label = (props: LabelProps) => {
  const classes = labelClasses();
  return <label className={classes.label}>{props.text}</label>;
};

export default Label;
