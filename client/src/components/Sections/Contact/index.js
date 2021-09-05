import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import GitHubButton from '../../Buttons/Contact/GitHubButton';
import LinkedInButton from '../../Buttons/Contact/LinkedInButton';

const Contact = () => {
  return (
    <Fragment>
      <Typography variant='h2'>Contact</Typography>
      <GitHubButton />
      <LinkedInButton />
    </Fragment>
  );
};

export default Contact;
