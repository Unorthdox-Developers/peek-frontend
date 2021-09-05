export type IconProps = {
  icon: string;
};

const Icon = (props: IconProps) => {
  return <i className={props.icon} />;
};

export default Icon;
