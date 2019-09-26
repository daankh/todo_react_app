import React, { Fragment } from 'react';
import ButtonAppBar from '../components/AppBar';
import TodosList from './TodosList'

const TodosListPage = (props) => {

    return (
        <Fragment>
            <ButtonAppBar showAddTodoBtn={true} />
            <TodosList {...props} />
        </Fragment>
    )
}

export default TodosListPage