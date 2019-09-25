const getMatchTodoComments = (comments, todoId) => {
    return comments.filter(comment => {
        if (comment.todoId === todoId) {
            return comment.text;
        } else {
            return '';
        }
    })
};

export default getMatchTodoComments;