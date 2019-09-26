import React, { Component, Fragment } from 'react';
import moment from 'moment';
import uuid from 'uuid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import ButtonAppBar from './AppBar';
import { classes } from 'istanbul-lib-coverage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            timestamp: moment().valueOf(),
            done: false,
            description: '',
        }
    }

    inputChangeHandler = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    // addTodo = (e) => {
    //     e.preventDefault();
    //     const { name } = this.state
    //     const { addTodo, history } = this.props

    //     if (name) {
    //         const todo = {
    //             ...this.state,
    //             id: uuid(),
    //         }

    //         addTodo(todo);
    //         history.push('/list');
    //     }
    // }

    onSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state
        // const { onSubmit } = this.props

        if (name) {
            const todo = {
                ...this.state,
                id: uuid(),
            }
            this.props.onSubmit(todo);
        }
    }

    render() {

        const { name, description } = this.state
        return (
            <Fragment>
                <ButtonAppBar showHomeBtn={true} />
                <Box component="div" p={1}>
                    <form onSubmit={this.onSubmit}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="my-input">Todo name</InputLabel>
                            <Input type='text'
                                name='name'
                                id="my-input"
                                aria-describedby="my-helper-text"
                                autoFocus={true}
                                value={name}
                                onChange={this.inputChangeHandler} />
                            <FormHelperText id="my-helper-text">Type your new todo name</FormHelperText>
                            <TextField
                                id="outlined-name"
                                name='description'
                                label="Description"
                                className={classes.textField}
                                value={description}
                                onChange={this.inputChangeHandler}
                                margin="normal"
                                variant="outlined"
                                fullWidth={true}
                            />
                            <button>save todo</button>
                        </FormControl>
                    </form>
                </Box>
            </Fragment>
        );
    }
}



export default TodoForm;