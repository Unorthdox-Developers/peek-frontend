import { createUseStyles } from 'react-jss';

const iconClasses = createUseStyles({
  icon: {},
});

export interface IIconProps {
  icon: string;
}

const Icon = (props: IIconProps) => {
  const classes = iconClasses();
  return <i className={`${classes.icon} ${props.icon}`} />;
};

export default Icon;
