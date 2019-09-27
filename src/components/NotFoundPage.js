import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar'

const NotFoundPage = () => {
    return (
        <Fragment>
            <AppBar />
            <Box component='div' p={2}>
                <Typography variant="h5" component="h5">
                    <NavLink to="/">Page not found - go back to home page</NavLink>
                </Typography>
            </Box>
        </Fragment>
    )
}

export default NotFoundPage