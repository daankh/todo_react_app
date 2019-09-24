
const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'REMOVE_TODO':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TODO':
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return {
                        ...todo,
                        ...action.todo,
                    }
                } else {
                    return todo
                }
            })
        default:
            return state;
    }
}