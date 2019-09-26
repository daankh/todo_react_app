import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos'
import TodoForm from "./TodoFrom";

const AddTodoPage = ({ addTodo, history }) => {

    return (
        <TodoForm onSubmit={
            (todo) => {
                console.log(todo)
                addTodo(todo);
                history.push('/list');
            }
        } />
    )
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodoPage);