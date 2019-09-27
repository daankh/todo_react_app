import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import NoTodosInfo from './NoTodosInfo';
import TodosListItem from './TodosListItem';
import getMatchTodoComments from '../selectors/comments';

const TodoList = ({ todos, comments, history, filterType }) => {

  const showDoneLast = (a, b) => a.done - b.done;
  const showDoneOnly = () => { todos = todos.filter(todo => todo.done) }
  const showOpenOnly = () => { todos = todos.filter(todo => !todo.done) }

  switch (filterType) {
    case 'done':
      showDoneOnly();
      break;
    case 'open':
      showOpenOnly();
      break;
    default:
      break;
  }

  let content = null;
  if (todos.length) {
    content = todos.sort(showDoneLast).map((todo) => {
      const todoComments = getMatchTodoComments(comments, todo.id)
      return <TodosListItem key={todo.id} {...todo} comments={todoComments} history={history} />
    })
  } else {
    content = (
      <NoTodosInfo />
    )
  }

  return (
    <Box component="div">
      {content}
    </Box>
  )
}

const mapStateToProps = ({ todos, comments }) => {
  return {
    todos: todos.todosList.sort((a, b) => b.timestamp - a.timestamp),
    comments: comments.commentsList,
  }
}

export default connect(mapStateToProps)(TodoList);