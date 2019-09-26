import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions/todos';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from './ExpansionPanel';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
  mainHeading: {
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

const TodosListItem = ({ id, name, timestamp, done, description, comments, removeTodo, editTodo, history }) => {
  const classes = useStyles();
  const [checkboxValue, toggleCheckbox] = useState(done);

  const toggleDoneValue = () => {
    toggleCheckbox(!checkboxValue);

    editTodo({
      id,
      name,
      timestamp,
      done: !checkboxValue,
      description,
    })
  }

  return (
    <Box component="div" className={classes.wrapper}>
      <Box component="div" p={1} className={classes.row}>
        <Checkbox
          checked={checkboxValue}
          onChange={toggleDoneValue}
        />
        <Typography variant="h4" component="h4" className={classes.mainHeading}>
          {name}
        </Typography>
        <Typography className={classes.timestamp}>
          <span>created at: </span>
          {moment(timestamp).format('DD/MM/YYYY')}
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}
          onClick={() => history.push(`/${id}/edit`)}>
          Edit
      </Button>
        <Button variant="contained" color="secondary" className={classes.button}
          onClick={() => removeTodo({ id })}>
          Delete
      </Button>
      </Box>
      <ExpansionPanel purpose='details' heading={'Details'} content={description} />
      <ExpansionPanel purpose='comments' heading={'Comments'} content={comments} />
    </Box>
  );
}

const mapDispatchToState = {
  removeTodo,
  editTodo,
}

// const mapStateToProps = ({ todos }, { match, id }) => {
//   return {
//     todo: todos.todosList.find(todo => todo.id === id)
//   }
// }

export default connect(null, mapDispatchToState)(TodosListItem);