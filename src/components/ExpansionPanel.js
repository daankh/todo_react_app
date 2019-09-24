import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
    backgroundColor: '#3F51B5',
    color: '#fff',
    borderRadius: '5px',
  },
  wrapperComment: {
    width: '100%',
    display: 'flex'
  },
  addCommentInput: {
    flexGrow: '1',
    marginRight: theme.spacing(1),
  }
}));

export default (props) => {
  const classes = useStyles();
  const { purpose, heading, content } = props;
  let displayingContent = null;

  if (purpose === 'details') {
    if (!content) {
      displayingContent = 'There are no details. You can add it in edit mode.'
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
        content.map((comment, index) => (
          <Box key={index} component="div" className={classes.comment} p={1}>
            {comment}
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
              <Box component="div" className={classes.wrapperComment} p={1}>
                <Input
                  type={'text'}
                  className={classes.addCommentInput}
                  placeholder={'type your comment here'} />
                <Button onClick={() => console.log('added')}>
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