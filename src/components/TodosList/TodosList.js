import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NoTodosInfo from '../Info/NoTodosInfo';
import TodosListItem from './TodosListItem';
import getMatchTodoComments from '../../redux/selectors/comments';
import getMatchTodos from '../../redux/selectors/todos';

const TodoList = ({ todos, comments, show, history }) => {

  let heading = null;
  let content = null;
  let headingSecond = null;
  let contentSecond = null

  if (todos.length) {
    if (show === 'open' || show === 'done') {
      heading = show === 'open' ? 'Todos in progress...' : 'Completed todos';
      content = todos.map((todo) => {
        const todoComments = getMatchTodoComments(comments, todo.id)
        return <TodosListItem key={todo.id} {...todo} comments={todoComments} history={history} />
      })
    } else {
      content = todos.filter(todo => !todo.done).map((todo) => {
        const todoComments = getMatchTodoComments(comments, todo.id)
        return <TodosListItem key={todo.id} {...todo} comments={todoComments} history={history} />
      })
      contentSecond = todos.filter(todo => todo.done).map((todo) => {
        const todoComments = getMatchTodoComments(comments, todo.id)
        return <TodosListItem key={todo.id} {...todo} comments={todoComments} history={history} />
      })

      heading = content.length ? 'Todos in progress...' : null;
      headingSecond = contentSecond.length ? 'Completed todos' : null;
    }
  } else {
    content = (
      <NoTodosInfo />
    )
  }

  return (
    <Box component="div">
      <Typography
        variant={'h4'}
        component={'h4'}
        align={'center'}
        style={{ margin: '20px 0' }}>
        {heading}
      </Typography>
      {content}
      {headingSecond && (
        <Typography
          variant={'h4'}
          component={'h4'}
          align={'center'}
          style={{ margin: '20px 0' }}>
          {headingSecond}
        </Typography>
      )}
      {contentSecond && contentSecond}
    </Box>
  )
}

const mapStateToProps = ({ todos, comments, filters }) => {
  return {
    todos: getMatchTodos(todos.todosList, filters.show).sort((a, b) => b.timestamp - a.timestamp),
    comments: comments.commentsList,
    show: filters.show,
  }
}

export default connect(mapStateToProps)(TodoList);