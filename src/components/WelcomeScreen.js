import React, { Fragment } from 'react';
import ButtonAppBar from '../components/AppBar';
import WelcomeInfo from './WelcomeInfo';

const WelcomeScreen = () => {
  return (
    <Fragment>
      <ButtonAppBar />
      <WelcomeInfo />
    </Fragment>
  );
}

export default WelcomeScreen