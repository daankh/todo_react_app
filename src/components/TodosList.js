import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import TodosListItem from './TodosListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    }
}));

const TodoList = (props) => {
    const classes = useStyles();

    return (
        <Box component="div">
            <div className={classes.root}>
                {props.todos.map((todo) => {
                    return <TodosListItem key={todo.id} {...todo} />
                })}
            </div>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoList);