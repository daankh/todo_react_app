import React, { Fragment } from 'react';
import ButtonAppBar from '../AppBar/AppBar';
import WelcomeInfo from '../Info/WelcomeInfo';

const WelcomeScreen = () => {
  return (
    <Fragment>
      <ButtonAppBar />
      <WelcomeInfo />
    </Fragment>
  );
}

export default WelcomeScreen