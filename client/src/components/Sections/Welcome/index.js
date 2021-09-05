import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Welcome = (props) => {
  return (
    <Box id={props.id}>
      <Typography variant='p'>
        Hi, I'm
        <br />
        customer-focused, <br />a pixel-perfectionist
        <br />
        an accessibility advocate
        <br />
        Bailee Dastugue
      </Typography>
    </Box>
  );
};

export default Welcome;
