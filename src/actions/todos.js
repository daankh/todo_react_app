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

