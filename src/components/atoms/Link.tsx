import { createUseStyles } from 'react-jss';

const linkClasses = createUseStyles({
  link: {},
});

export type LinkProps = {
  text: string;
  to: string;
};

const Link = (props: LinkProps) => {
  const classes = linkClasses();
  return (
    <a className={classes.link} href={props.to}>
      {props.text}
    </a>
  );
};

export default Link;
