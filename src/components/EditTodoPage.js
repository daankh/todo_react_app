import React from 'react';

const EditTodoPage = (props) => {

    return (
        <p>It comes from edit page, element id: {props.match.params.id}</p>
    )
}

export default EditTodoPage;