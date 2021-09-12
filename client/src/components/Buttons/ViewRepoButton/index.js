import React from 'react';
import CircleText from '../../Layout/CircleText';
import { Button, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '50px',
    margin: '0 auto',
    height: '70px',
    padding: '10px 0 0',
  },
}));

const ViewRepoButton = ({ repoLink }) => {
  const classes = useStyles();
  return (
    <Link href={repoLink} color='inherit' target='_blank' underline='none'>
      <Button variant='contained'>
        <Box className={classes.root}>
          <CircleText
            circleId='viewRepo'
            placement='top'
            fontStyle='heading-primary'
            size='xsmall'
            specificClass='viewRepo'
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view
          </CircleText>
          <CircleText
            circleId='repo'
            placement='bottom'
            fontStyle='heading-primary'
            size='xsmall'
            specificClass='repo'
          >
            &nbsp;&nbsp;&nbsp;&nbsp;repo
          </CircleText>
        </Box>
      </Button>
    </Link>
  );
};

export default ViewRepoButton;
