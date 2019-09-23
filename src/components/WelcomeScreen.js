import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ButtonAppBar from './AppBar';
import WelcomeInfo from './WelcomeInfo';

const WelcomeScreen = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ height: '100vh' }}>
                    <ButtonAppBar />
                    <WelcomeInfo />
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default WelcomeScreen