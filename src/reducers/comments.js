import { ADD_COMMENT } from '../actions/comments'

const commentsReducerDefaultState = {
    commentsList: []
};

export default (state = commentsReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                commentsList: [...state.commentsList,
                {
                    todoId: action.todoId,
                    text: action.commentText
                }]
            }
        default:
            return state;
    }
}

