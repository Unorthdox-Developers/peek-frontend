export type LinkProps = {
  text: string;
  to: string;
};

const Link = (props: LinkProps) => {
  return <a href={props.to}>{props.text}</a>;
};

export default Link;
