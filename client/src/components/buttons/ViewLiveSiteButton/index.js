import React from 'react';
import CircleText from '../../Layout/CircleText';
import { Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '50px',
    margin: '0 auto',
    height: '70px',
    padding: '10px 0 0',
  },
}));

const ViewLiveSiteButton = ({ liveSiteLink }) => {
  const classes = useStyles();
  return (
    <Link href={liveSiteLink} color='inherit' target='_blank' hover='none'>
      <Box className={classes.root}>
        <CircleText
          circleId='viewLiveSite'
          placement='top'
          fontStyle='heading-primary'
          size='xsmall'
          specificClass='viewLiveSite'
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view
        </CircleText>
        <CircleText
          circleId='liveSite'
          placement='bottom'
          fontStyle='heading-primary'
          size='xsmall'
          specificClass='liveSite'
        >
          &nbsp;live site
        </CircleText>
      </Box>
    </Link>
  );
};

export default ViewLiveSiteButton;
