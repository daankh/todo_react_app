import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom'

const WelcomeInfo = () => {
    return (
        <Box component="div" p={3}>
            <Typography variant="h4" component="h4">
                Welcome to Todo App.
            </Typography>
            <Typography variant="h6" component="h6" style={{
                marginBottom: '10px',
                marginTop: '10px',
            }}>
                Click link below to manage your todos
            </Typography>
            <NavLink to={'./list'}>get started</NavLink>
        </Box>
    )
}

export default WelcomeInfo