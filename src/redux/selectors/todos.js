const getMatchTodos = (todos, filter) => {
  if (filter === 'open') {
    return todos.filter(todo => todo.done)
  } else if (filter === 'done') {
    return todos.filter(todo => !todo.done)
  }
  return todos
}

export default getMatchTodos