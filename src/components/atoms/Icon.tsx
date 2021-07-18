import { createUseStyles } from 'react-jss';

const iconClasses = createUseStyles({
  icon: {},
});

type IconProps = {
  icon: string;
};

const Icon = (props: IconProps) => {
  const classes = iconClasses();
  return <i className={`${classes.icon} ${props.icon}`} />;
};

export default Icon;
