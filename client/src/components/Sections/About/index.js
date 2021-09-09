import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    fontSize: '1.2rem',
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>About Bailee,</Typography>
      <Typography paragraph className={classes.paragraph}>
        As a developer, I engage the same part of my brain that loves organic
        chemistry and that part that needs text to be vertically and
        horizontally centered. While I gravitate towards the front end, I'm
        willing, able, and excited to tackle the full stack. My positive
        attitude is a constant - I start every scrum with a "good morning", no
        matter how many blockers I have to report that day. My attention to
        detail, my ability to communicate cross functionally from designer to
        developer, and my focus on business priorities makes me an asset to any
        team.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        In my free time, I'm watching Star Trek with my husband, teaching myself
        how to knit (again!), and listening to an absurd amount of Billy Joel.
      </Typography>
    </Box>
  );
};

export default About;
