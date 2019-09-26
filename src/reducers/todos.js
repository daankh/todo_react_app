import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../actions/todos';

const todosReducerDefaultState = {
    todosList: []
}

export default (state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todosList: [...state.todosList, action.todo]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todosList: state.todosList.filter(({ id }) => id !== action.id),
            }
        case EDIT_TODO:

            return {
                ...state,
                todosList: state.todosList.map(todo => {
                    if (todo.id === action.todo.id) {
                        return {
                            ...todo,
                            ...action.todo,
                        }
                    } else {
                        return todo
                    }
                })
            }
        default:
            return state;
    }
}