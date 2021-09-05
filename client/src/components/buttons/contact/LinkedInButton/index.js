import React from 'react';
import CircleText from '../../../Layout/CircleText';
import { Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100px',
    margin: '0 auto',
    height: '120px',
    padding: '10px 0',
  },
  icon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2.5rem',
  },
}));

const LinkedInButton = () => {
  const classes = useStyles();
  return (
    <Link
      href='https://www.linkedin.com/in/bailee-dastugue/'
      color='inherit'
      target='_blank'
      hover='none'
    >
      <Box className={classes.root}>
        <CircleText
          circleId='connect'
          placement='top'
          fontStyle='heading-primary'
          size='small'
          specificClass='connect'
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connect on
        </CircleText>
        <CircleText
          circleId='linkedIn'
          placement='bottom'
          fontStyle='heading-primary'
          size='small'
          specificClass='linkedIn'
        >
          &nbsp;&nbsp;LinkedIn
        </CircleText>
        <LinkedInIcon fontStyle='large' className={classes.icon} />
      </Box>
    </Link>
  );
};

export default LinkedInButton;
