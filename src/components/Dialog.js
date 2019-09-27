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

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer'
  },
}));

export default function ResponsiveDialog({ btnType, id, removeTodo }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeTodoHandler = () => {
    removeTodo({ id });
    setOpen(false);
  };

  let button = null
  if (btnType === 'removeBtn') {
    button = (
      <Button variant="contained" color="secondary" className={classes.button}
        onClick={handleClickOpen}>
        Delete
      </Button>
    )
  }

  return (
    <div>
      {button}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Delete todo"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove this todo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
          <Button onClick={removeTodoHandler} color="secondary" >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}