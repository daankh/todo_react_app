import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import TodosListItem from './TodosListItem';

const TodoList = ({ todos, comments }) => {

  return (
    <Box component="div">
      {todos.map((todo) => {
        return <TodosListItem key={todo.id} {...todo} />
      })}
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    comments: state.comments,
  }
}

export default connect(mapStateToProps)(TodoList);