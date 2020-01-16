import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Link to='/add'>
      <Fab color="secondary" aria-label="add" className={classes.fab} size='small'>
        <AddIcon />
      </Fab>
    </Link>
  )
}