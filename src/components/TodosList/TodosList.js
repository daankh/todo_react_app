import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import NoTodosInfo from '../Info/NoTodosInfo';
import TodosListItem from './TodosListItem';
import getMatchTodoComments from '../../redux/selectors/comments';
import getMatchTodos from '../../redux/selectors/todos';

const TodoList = ({ todos, comments, history, filterType }) => {

  // const showDoneLast = (a, b) => a.done - b.done;
  // const showDoneOnly = () => { todos = todos.filter(todo => todo.done) }
  // const showOpenOnly = () => { todos = todos.filter(todo => !todo.done) }

  // switch (filterType) {
  //   case 'done':
  //     showDoneOnly();
  //     break;
  //   case 'open':
  //     showOpenOnly();
  //     break;
  //   default:
  //     break;
  // }

  let content = null;
  if (todos.length) {
    content = todos.map((todo) => {
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

const mapStateToProps = ({ todos, comments, filters }) => {
  return {
    todos: getMatchTodos(todos.todosList, filters.show),
    comments: comments.commentsList,
  }
}

export default connect(mapStateToProps)(TodoList);