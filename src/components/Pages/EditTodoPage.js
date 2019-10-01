import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../../actions/todos'
import TodoForm from "./TodoFrom";

const EditTodoPage = ({ todo, editTodo, history }) => {
  const onSubmit = (todo) => {
    editTodo(todo);
    history.push('/list');
  }

  return (
    <TodoForm
      todo={todo}
      onSubmit={onSubmit} />
  )
}

const mapDispatchToProps = {
  editTodo,
}

const mapStateToProps = ({ todos }, { match }) => {
  return {
    todo: todos.todosList.find(todos => todos.id === match.params.id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage);