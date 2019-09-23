import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Box from '@material-ui/core/Box';

// import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: 700,
        fontSize: '22px',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexGrow: 1
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const TodosListItem = ({ id, name, timestamp, done, description, comments }) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>{name}</Typography>
                <Typography className={classes.secondaryHeading}>created at: {moment(timestamp).format('DD.MM.YYYY')}</Typography>
                <Fab disabled aria-label="delete" className={classes.fab} size="small">
                    <DeleteIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit" className={classes.fab} size="small">
                    <EditIcon />
                </Fab>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{
                flexDirection: 'column',
            }}>

                <Typography>
                    {description}
                </Typography>

                <Typography>
                    {comments}
                </Typography>

            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default TodosListItem;