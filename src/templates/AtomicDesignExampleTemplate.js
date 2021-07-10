import { createUseStyles } from 'react-jss';

const templateClasses = createUseStyles({
  main: {
    height: '100%',
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  left: {
    width: '50%',
  },
  rigth: {
    width: '50%',
    alignSelf: 'center',
  },
});

function AtomicDesignExampleTemplate(props) {
  const classes = templateClasses();
  return (
    <div className={classes.main}>
      <div className={classes.left}>{props.left}</div>
      <div className={classes.rigth}>{props.right}</div>
    </div>
  );
}

export default AtomicDesignExampleTemplate;
