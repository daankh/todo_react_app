//ADD_COMMENT
export const addComment = (todoId, commentText) => ({
    type: 'ADD_COMMENT',
    todoId,
    commentText,
})