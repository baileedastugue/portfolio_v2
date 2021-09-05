import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: '2.1rem',
  },
}));

const Welcome = (props) => {
  const classes = useStyles();

  return (
    <Box id={props.id}>
      <Typography
        variant='h3'
        component='p'
        className={classes.root}
        gutterBottom
      >
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
