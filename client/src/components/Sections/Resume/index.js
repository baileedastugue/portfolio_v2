import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Resume = (props) => {
  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>Resume</Typography>
    </Box>
  );
};

export default Resume;
