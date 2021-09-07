import React, { useState } from 'react';
import CircleText from '../../../Layout/CircleText';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/styles';
import { Box, Link } from '@material-ui/core';
import { useSpring, animated } from '@react-spring/web';
import PauseButton from '../../Accessibility/PauseButton';
import PlayButton from '../../Accessibility/PlayButton';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  btnContainer: {
    position: 'absolute',
    left: '87%',
    top: '87%',
    transform: 'translate(-50%, -50%)',
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
  const [btnPaused, setBtnPaused] = useState(false);

  const styles = useSpring({
    loop: true,
    pause: btnPaused,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 70000 },
  });

  const handlePlayPauseBtnClick = () => {
    setBtnPaused(!btnPaused);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Link
          href='https://github.com/baileedastugue'
          hover='none'
          color='inherit'
          target='_blank'
          aria-label="Link to Bailee Dastugue's GitHub"
        >
          <animated.div style={styles}>
            <CircleText
              circleId='github'
              fontStyle='heading-primary'
              size='large'
              placement='full'
            >
              &nbsp;GitHub GitHub GitHub GitHub
            </CircleText>
          </animated.div>
          <GitHubIcon fontSize='large' className={classes.icon} />
        </Link>
      </Box>
      <Box className={classes.btnContainer}>
        <PauseButton
          aria-label='Pause GitHub button animation'
          btnPaused={btnPaused}
          style={{ display: btnPaused ? 'none' : 'block' }}
          handlePlayPauseBtnClick={handlePlayPauseBtnClick}
        />
        <PlayButton
          aria-label='Pause GitHub button animation'
          btnPaused={btnPaused}
          style={{ display: btnPaused ? 'block' : 'none' }}
          handlePlayPauseBtnClick={handlePlayPauseBtnClick}
        />
      </Box>
    </Box>
  );
};

export default GitHubButton;
