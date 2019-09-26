import moment from 'moment';
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/comments'


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
    case REMOVE_COMMENT:
      return {
        ...state,
        commentsList: state.commentsList.filter(
          comment => {
            return comment.timestamp !== action.comment.timestamp
          }
        )
      }
    default:
      return state;
  }
}

