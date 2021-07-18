import { createUseStyles } from 'react-jss';

const linkClasses = createUseStyles({
  link: {},
});

export interface ILinkProps {
  text: string;
  to: string;
}

const Link = (props: ILinkProps) => {
  const classes = linkClasses();
  return (
    <a className={classes.link} href={props.to}>
      {props.text}
    </a>
  );
};

export default Link;
