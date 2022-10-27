import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { makeStyles } from '@material-ui/core/styles';
import { InView } from 'react-intersection-observer';
import { Box, Typography } from '@material-ui/core';
import theme from '../../Layout/ThemeProvider';
import PersonalImage from '../../Layout/PersonalImage';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    marginBottom: '5%',
    position: 'relative',
    [theme.breakpoints.up(425)]: {
      marginBottom: '12%',
    },
  },
  animation: {
    fontSize: '1.55rem',
    margin: '0 0 12px',
    lineHeight: 1,
    [theme.breakpoints.up(375)]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up(425)]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up(768)]: {
      fontSize: '2.5rem',
      margin: '0 0 15px',
    },
    [theme.breakpoints.up(1024)]: {
      fontSize: '2.8rem',
      margin: '0 0 25px',
    },
  },
}));

const Welcome = (props) => {
  const classes = useStyles();
  const [inView, setInView] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const [animatedItems, set] = useState([]);
  const listRef = useRef([]);
  const transitions = useTransition(animatedItems, {
    from: {
      opacity: 0,
      y: 20,
    },
    pause: inView,
    config: { mass: 1, tension: 120, friction: 14 },
    enter: [
      {
        opacity: 1,
        y: 0,
        color: theme.palette.text.secondary,
      },
    ],
    update: { color: '#808080' },
    onRest: () => setAnimationComplete(true),
  });

  const animateText = useCallback(() => {
    const animatedList = [
      'a software engineer,',
      'a pixel-perfectionist,',
      'an accessibility advocate,',
      'Bailee Dastugue',
    ];
    const timeout = [1000, 2200, 3400, 4600];
    listRef.current.forEach(clearTimeout);
    listRef.current = [];
    set([]);
    listRef.current.push(setTimeout(() => set([animatedList[0]]), timeout[0]));
    listRef.current.push(
      setTimeout(() => set([animatedList[0], animatedList[1]]), timeout[1])
    );
    listRef.current.push(
      setTimeout(
        () => set([animatedList[0], animatedList[1], animatedList[2]]),
        timeout[2]
      )
    );
    listRef.current.push(
      setTimeout(
        () =>
          set([
            animatedList[0],
            animatedList[1],
            animatedList[2],
            animatedList[3],
          ]),
        timeout[3]
      )
    );
  }, []);

  useEffect(() => {
    if (inView && !animationComplete) {
      animateText();
    }
  }, [animateText, inView, animationComplete]);

  return (
    <InView onChange={setInView}>
      {({ ref, inView }) => (
        <Box ref={ref} id={props.id} className={classes.root}>
          <Typography
            variant='h3'
            component='div'
            className={classes.animation}
            gutterBottom
          >
            Hi, I'm
          </Typography>
          {transitions(({ ...rest }, animatedItem, key) => (
            <animated.div style={rest}>
              <Typography
                variant='h3'
                component='p'
                className={classes.animation}
                key={key.key}
                style={{
                  color:
                    key.key === 'Bailee Dastugue' && theme.palette.text.primary,
                }}
              >
                {animatedItem}
              </Typography>
            </animated.div>
          ))}
          <PersonalImage />
        </Box>
      )}
    </InView>
  );
};

export default Welcome;
