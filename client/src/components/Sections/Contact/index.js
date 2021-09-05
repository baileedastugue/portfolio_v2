import React from 'react';
import { Typography, Box } from '@material-ui/core';
import GitHubButton from '../../Buttons/Contact/GitHubButton';
import LinkedInButton from '../../Buttons/Contact/LinkedInButton';

const Contact = (props) => {
  return (
    <Box id={props.id}>
      <Typography variant='h2'>Contact</Typography>
      <GitHubButton />
      <LinkedInButton />
    </Box>
  );
};

export default Contact;
