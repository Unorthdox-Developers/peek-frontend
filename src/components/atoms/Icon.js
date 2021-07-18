import { createUseStyles } from 'react-jss';

const iconClasses = createUseStyles({
  icon: {},
});

const Icon = (props) => {
  const classes = iconClasses();
  return <i className={`${classes.icon} ${props.icon}`} />;
};

export default Icon;
