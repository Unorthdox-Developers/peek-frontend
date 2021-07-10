import { createUseStyles } from 'react-jss';

const linkClasses = createUseStyles({
  link: {},
});

function Link(props) {
  const classes = linkClasses();
  return (
    <a className={classes.label} href={props.to}>
      {props.text}
    </a>
  );
}

export default Link;
