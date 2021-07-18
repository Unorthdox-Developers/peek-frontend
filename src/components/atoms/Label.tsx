import { createUseStyles } from 'react-jss';

const labelClasses = createUseStyles({
  label: {},
});

export interface ILabelProps {
  text: string;
}

const Label = (props: ILabelProps) => {
  const classes = labelClasses();
  return <label className={classes.label}>{props.text}</label>;
};

export default Label;
