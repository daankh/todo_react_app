import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  wrapper: {
    width: '100%',
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
  addCommentWrapper: {
    width: '100%',
    display: 'flex',
  },
  addCommentInput: {
    flexGrow: '1',
    marginRight: theme.spacing(1),
  },
  commentItem: {
    flexGrow: '1',
    fontSize: theme.typography.pxToRem(16),
  },
  btn: {
    color: '#fff',
  },
}));

const Panel = ({ purpose, heading, todoId, content, addComment, removeComment }) => {
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

  let displayingContent = null;

  if (purpose === 'details') {
    if (!content) {
      displayingContent = 'There is no description here. You can add it in edit mode.'
    } else {
      displayingContent = (
        <Box>
          {content}
        </Box>
      )
    }
  } else if (purpose === 'comments') {
    if (!content.length) {
      displayingContent = 'There are no comments. You can add some below.'
    } else {
      displayingContent = (
        content.map((comment) => (
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
        ))
      )
    }
  } else {
    displayingContent = 'no data availible'
  }


  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {heading}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box className={classes.wrapper}>
            {displayingContent}
            {purpose === 'comments' && (
              <Box component="div" className={classes.addCommentWrapper}>
                <Input
                  type={'text'}
                  className={classes.addCommentInput}
                  placeholder={'type your comment here'}
                  value={commentText}
                  onChange={commentTextHandler} />
                <Button onClick={addCommentHandler}>
                  Add comment
                </Button>
              </Box>
            )}
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Panel