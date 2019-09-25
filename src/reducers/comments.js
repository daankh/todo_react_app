const commentsReducerDefaultState = [];

export default (state = commentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    todoId: action.todoId,
                    text: action.commentText
                }]
        default:
            return state;
    }
}