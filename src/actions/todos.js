import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
//ADD_TODO
export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo: {
        ...todo,
        id: uuid(),
    }
})

//REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
    type: REMOVE_TODO,
    id,
})

//EDIT_TODO
export const editTodo = (todo) => ({
    type: EDIT_TODO,
    todo: {
        ...todo,
    }
})

