import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/todos'
import TodoForm from "./TodoFrom";

const AddTodoPage = ({ addTodo, history }) => {

  const onSubmit = (todo) => {
    addTodo(todo);
    history.push('/list');
  }

  return (
    <TodoForm onSubmit={onSubmit} />
  )
}

const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(AddTodoPage);