import React, { Fragment } from 'react';
import ButtonAppBar from '../components/AppBar';
import TodosList from './TodosList'

const TodosListPage = (props) => {

    return (
        <Fragment>
            <ButtonAppBar />
            <TodosList />
        </Fragment>
    )
}

export default TodosListPage