import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  comment: {
    width: '100%',
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    backgroundColor: '#3F51B5',
    color: '#fff',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentItem: {
    flexGrow: '1',
    fontSize: theme.typography.pxToRem(16),
  },
  btn: {
    color: '#fff',
  },
}));

const Comment = ({ comment, removeComment }) => {
  const classes = useStyles();

  return (
    <Box key={comment.timestamp}
      component="div"
      className={classes.comment} >
      <Box className={classes.commentItem}>{comment.text}</Box>
      <Box>
        {moment(comment.timestamp).fromNow()}
      </Box>
      <IconButton aria-label="delete" className={classes.margin}
        onClick={() => removeComment(comment)}
      >
        <DeleteIcon color="secondary" className={classes.btn} />
      </IconButton>
    </Box>
  )
}

export default Comment