import React, { Component, Fragment } from 'react';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import ButtonAppBar from './AppBar';
import { classes } from 'istanbul-lib-coverage';
import TextField from '@material-ui/core/TextField';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      timestamp: moment().valueOf(),
      done: false,
      description: '',
    }
  }

  componentDidMount() {
    if (this.props.todo) {

      const { id, name, timestamp, done, description } = this.props.todo;

      this.setState({
        id,
        name,
        timestamp,
        done,
        description,
      })
    }
  }

  inputChangeHandler = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state

    if (name) {
      const todo = {
        ...this.state,
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
            </FormControl>
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
            <Input type='submit' value='Save todo' />
          </form>
        </Box>
      </Fragment>
    );
  }
}

export default TodoForm;