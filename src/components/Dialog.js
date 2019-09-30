import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer',
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

export default function ResponsiveDialog({ btnType, id, removeTodo }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenClose = () => setOpen(!open);

  const removeTodoHandler = () => {
    removeTodo({ id });
    handleOpenClose();
  };

  const button = (
    <Fab color="secondary" aria-label="add" className={classes.fab} size='medium' onClick={handleOpenClose}>
      <DeleteForeverIcon />
    </Fab>
  );
  const heading = 'Remove todo';
  const message = 'Do you really want to remove this todo?';
  const disagreeText = 'No';
  const agreeText = 'Remove'

  return (
    <div>
      {button}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleOpenClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenClose} color="primary" autoFocus>
            {disagreeText}
          </Button>
          <Button onClick={removeTodoHandler} color="secondary" >
            {agreeText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}