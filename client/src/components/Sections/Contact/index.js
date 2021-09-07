import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubButton from '../../Buttons/Contact/GitHubButton';
import LinkedInButton from '../../Buttons/Contact/LinkedInButton';
import EmailButton from '../../Buttons/Contact/EmailButton';

const Contact = (props) => {
  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>Contact</Typography>
      <GitHubButton />
      <Grid container justifyContent='center'>
        <Grid item xs={6}>
          <LinkedInButton />
        </Grid>
        <Grid item xs={6}>
          <EmailButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
