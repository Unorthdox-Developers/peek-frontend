import Button from '@atoms/Button';
import {
  Card,
  CardActions,
  CardContent,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        margin: '0.5rem',
        width: '20rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    }),
  { name: 'molecule-repository-card' }
);

export type RepositoryCardProps = {
  repository: any;
};

const RepositoryCard = (props: RepositoryCardProps) => {
  const classes = useStyles();
  const repositoryData = props.repository;

  const goToGitHub = () => {
    const newWindow = window.open(
      repositoryData.html_url,
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  const goToDashboard = () => {};

  return (
    <Card classes={{ root: classes.root }}>
      <CardContent>
        <Typography>{repositoryData.name}</Typography>
        <Typography paragraph={true}>{repositoryData.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClickFunction={goToGitHub} text="GitHub" />
        <Button onClickFunction={goToDashboard} text="Dashboard" />
      </CardActions>
    </Card>
  );
};

export default RepositoryCard;
