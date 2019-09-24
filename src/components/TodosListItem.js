import React from 'react';
// import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';

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
  timestamp: {
    marginRight: theme.spacing(1),
  },
}));

const TodosListItem = ({ id, name, timestamp, done, description, comments }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="div" p={1} className={classes.box}>
        <Checkbox
          value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A' }
          }
        />
        <Typography variant="h4" component="h4" className={classes.heading}>
          {name}
        </Typography>
        <Typography className={classes.timestamp}>
          <span>created at: </span>
          {moment(timestamp).format('DD/MM/YYYY')}
        </Typography>
        <Button variant="contained" color="primary" className={classes.button} onClick={(e) => console.log('edit')}>
          Edit
      </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => console.log('remove')}>
          Delete
      </Button>
      </Box>
    </React.Fragment>
  );
}

export default TodosListItem;