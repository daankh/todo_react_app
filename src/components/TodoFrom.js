import React, { Component, Fragment } from 'react';
import ButtonAppBar from './AppBar';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <ButtonAppBar showHomeBtn={true} />
                <p>TodoForm</p>
            </Fragment>
        );
    }
}

export default TodoForm;