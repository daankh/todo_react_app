import React, { Fragment } from 'react';
import ButtonAppBar from '../AppBar/AppBar';
import TodosList from '../TodosList/TodosList'

const TodosListPage = (props) => {

  return (
    <Fragment>
      <ButtonAppBar showAddTodoBtn={true} showFilterSelect={true} />
      <TodosList {...props} />
    </Fragment>
  )
}

export default TodosListPage