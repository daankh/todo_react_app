import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const NoTodosInfo = () => {
  return (
    <Box component='div' p={2}>
      <Typography variant="h5" component="h5">
        You don't have any todos. You can add some above.
      </Typography>
    </Box>
  );
}

export default NoTodosInfo;