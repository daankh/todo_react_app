export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

//ADD_COMMENT
export const addComment = (todoId, commentText) => ({
  type: ADD_COMMENT,
  todoId,
  commentText,
})

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
})