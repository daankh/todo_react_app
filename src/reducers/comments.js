import { ADD_COMMENT } from '../actions/comments'
import moment from 'moment';

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
                    timestamp: moment().valueOf(),
                    todoId: action.todoId,
                    text: action.commentText
                }]
            }
        default:
            return state;
    }
}

