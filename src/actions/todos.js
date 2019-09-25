import uuid from 'uuid';
//ADD_TODO
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo: {
        ...todo,
        id: uuid(),
    }
})

//REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
    type: 'REMOVE_TODO',
    id,
})

//EDIT_TODO
export const editTodo = (todo) => ({
    type: 'EDIT_TODO',
    todo
})

