import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FilterSelect from './FilterSelect';
import AddTodoBtn from '../Buttons/AddTodoBtn';
import HomeBtn from '../Buttons/HomeBtn';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ showFilterSelect, showAddTodoBtn, showHomeBtn }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Todo App
                    </Typography>
          {showFilterSelect && <FilterSelect />}
          {showAddTodoBtn && <AddTodoBtn />}
          {showHomeBtn && <HomeBtn />}
        </Toolbar>
      </AppBar>
    </div>
  );
}