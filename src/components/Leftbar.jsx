/** @format */
import { makeStyles } from '@mui/styles';

import { Container, Typography } from '@mui/material';
import { Person, List } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: 'white',
    height: '100vh',
    width: '240',
    color: '#555',
    border: '1px solid #999',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
    </Container>
  );
};
export default Leftbar;
