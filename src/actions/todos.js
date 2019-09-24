import uuid from 'uuid';
//ADD_TODO
export const addTodo = (
    {
        name,
        timestamp,
        done,
        description,
        comments,
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
export const editTodo = (todo) => ({
    type: 'EDIT_TODO',
    todo
})

//ADD_COMMENT
export const addComment = (todo, comment) => ({
    type: 'ADD_COMMENT',
    todo,
    comment,
})

