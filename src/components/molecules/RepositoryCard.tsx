import { Card, CardContent, createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      card: {
        padding: '0.5rem',
        margin: '0.5rem',
        width: '15rem',
        wordWrap: 'break-word',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    }),
  { name: 'molecule-repository' }
);

export type RepositoryCardProps = {
  repository: any;
};

const RepositoryCard = (props: RepositoryCardProps) => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <h3>{props.repository.name}</h3>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>Go to GitHub</a>
      </CardContent>
    </Card>
  );
};

export default RepositoryCard;
