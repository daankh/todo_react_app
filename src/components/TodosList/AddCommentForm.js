import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  addCommentWrapper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  form: {
    width: '100%',
  },
  addCommentInput: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  }
}));

const AddCommentForm = ({ todoId, addComment }) => {
  const classes = useStyles();
  const [commentText, setCommentText] = useState('');

  const commentTextHandler = (e) => {
    const { value } = e.target;

    setCommentText(value)
  }

  const addCommentHandler = () => {
    addComment(todoId, commentText)
    setCommentText('');
  }

  return (
    <Box
      component="div"
      className={classes.addCommentWrapper}
      width={1}>
      <form
        className={classes.form}
        onSubmit={addCommentHandler}>
        <Input
          type={'text'}
          placeholder={'type your comment here'}
          value={commentText}
          className={classes.addCommentInput}
          onChange={commentTextHandler} />
        <Button
          type='submit'>
          Add comment
      </Button>
      </form>
    </Box>
  )
}

export default AddCommentForm;