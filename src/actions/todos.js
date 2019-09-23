import uuid from 'uuid';
//ADD_TODO
export const addTodo = (
    {
        name = '',
        timestamp = 0,
        done = false,
        description = '',
        comments = ''
    }
) => ({
    type: 'ADD_TODO',
    todo: {
        id: uuid(),
        name,
        timestamp,
        done,
        description,
        comments
    }
})

//REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
    type: 'REMOVE_TODO',
    id,
})

//EDIT_TODO
export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates,
})

