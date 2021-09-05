import React from 'react';
import CircleText from '../../../Layout/CircleText';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '5rem',
  },
}));

const GitHubButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link
        href='https://github.com/baileedastugue'
        hover='none'
        color='inherit'
        target='_blank'
      >
        <CircleText
          circleId='github'
          fontStyle='heading-primary'
          size='large'
          placement='full'
        >
          &nbsp;GitHub GitHub GitHub GitHub
        </CircleText>
        <GitHubIcon fontSize='large' className={classes.icon} />
      </Link>
    </div>
  );
};

export default GitHubButton;
