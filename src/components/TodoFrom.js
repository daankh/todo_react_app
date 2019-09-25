import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import ButtonAppBar from './AppBar';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
    }
}));

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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name } = this.state
        return (
            <Fragment>
                <ButtonAppBar showHomeBtn={true} />
                <Box component="div" p={1}>
                    <form className={classes.form} >
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="my-input">Todo name</InputLabel>
                            <Input type='text'
                                name='name'
                                id="my-input"
                                aria-describedby="my-helper-text"
                                value={name}
                                onChange={this.inputChangeHandler} />
                            <FormHelperText id="my-helper-text">Type your new todo name</FormHelperText>
                        </FormControl>
                    </form>
                </Box>
            </Fragment>
        );
    }
}

export default TodoForm;