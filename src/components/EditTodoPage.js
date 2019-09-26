import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions/todos'
import TodoForm from "./TodoFrom";

const EditTodoPage = ({ todo, editTodo, history }) => {
    return (
        <TodoForm
            todo={todo}
            onSubmit={
                (todo) => {
                    editTodo(todo);
                    history.push('/list');
                }
            } />
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