import React from 'react';
// import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#bdc3c7',
    marginBottom: '2px'
  },
  heading: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer'
  },
  input: {
    display: 'none',
  },
}));

const TodosListItem = ({ id, name, timestamp, done, description, comments }) => {
  const classes = useStyles();

  return (
    <Box component="div" p={1} className={classes.box}>
      <Typography variant="h4" component="h4" className={classes.heading}>
        {name}
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={(e) => console.log('edit')}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => console.log('remove')}>
        Delete
      </Button>
    </Box>
  );
}

export default TodosListItem;