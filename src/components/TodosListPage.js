import React, { Fragment, useState } from 'react';
import ButtonAppBar from '../components/AppBar';
import TodosList from './TodosList'

const TodosListPage = (props) => {

    const [filterType, setFilterType] = useState('all');

    return (
        <Fragment>
            <ButtonAppBar showAddTodoBtn={true} showFilterSelect={true} filterType={filterType} setFilterType={setFilterType} />
            <TodosList {...props} filterType={filterType} />
        </Fragment>
    )
}

export default TodosListPage