import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
  mainHeading: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer'
  },
  input: {
    display: 'none',
  },
  timestamp: {
    marginRight: theme.spacing(1),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const TodosListItem = ({ id, name, timestamp, done, description, comments }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.wrapper}>
      <Box component="div" p={1} className={classes.row}>
        <Checkbox
          value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A' }
          }
        />
        <Typography variant="h4" component="h4" className={classes.mainHeading}>
          {name}
        </Typography>
        <Typography className={classes.timestamp}>
          <span>created at: </span>
          {moment(timestamp).format('DD/MM/YYYY')}
        </Typography>
        <Button variant="contained" color="primary" className={classes.button} onClick={(e) => console.log('edit')}>
          Edit
      </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={(e) => console.log('remove')}>
          Delete
      </Button>
      </Box>
      <Box component="div" className={classes.row}>
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Show details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {description}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Box>
    </Box>
  );
}

export default TodosListItem;