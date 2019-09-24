import React, { Component, Fragment } from 'react';
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
    },
    input: {
        width: '100%',
    }
}));

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <ButtonAppBar showHomeBtn={true} />
                <Box component="div" p={1}>
                    <form className={classes.form}>
                        <FormControl className={classes.input}>
                            <InputLabel htmlFor="my-input">Todo name</InputLabel>
                            <Input type='text' id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Type your new todo name</FormHelperText>
                        </FormControl>
                    </form>
                </Box>
            </Fragment>
        );
    }
}

export default TodoForm;