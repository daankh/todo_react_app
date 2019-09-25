import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import TodosListItem from './TodosListItem';
import getMatchTodoComments from '../selectors/comments';

const TodoList = ({ todos, comments }) => {

  return (
    <Box component="div">
      {todos.map((todo) => {
        const todoComments = getMatchTodoComments(comments, todo.id)
        const commentsToSend = todoComments.map(commnet => commnet.text)
        return <TodosListItem key={todo.id} {...todo} comments={commentsToSend} />
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