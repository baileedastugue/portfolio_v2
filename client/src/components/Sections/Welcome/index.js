import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { makeStyles } from '@material-ui/styles';
import { InView } from 'react-intersection-observer';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: '30px',
  },
  animation: {
    fontSize: '30px',
    margin: '10px',
  },
}));

const Welcome = (props) => {
  const classes = useStyles();
  const [inView, setInView] = useState(false);

  const [animatedItems, set] = useState([]);
  const listRef = useRef([]);
  const transitions = useTransition(animatedItems, {
    from: {
      opacity: 0,
      y: 20,
      height: 0,
      innerHeight: 0,
    },
    config: { mass: 1, tension: 120, friction: 14 },
    enter: [
      {
        opacity: inView ? 1 : 0,
        height: 40,
        innerHeight: 40,
        y: inView ? 0 : 20,
        color: '#808080',
      },
    ],
    update: { color: '#808080' },
  });

  const animateText = useCallback(() => {
    const animatedList = [
      'customer-focused,',
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
    animateText();
  }, [animateText]);

  return (
    <InView onChange={setInView}>
      {({ ref, inView }) => (
        <Box ref={ref} id={props.id} style={{ height: '260px' }}>
          <Typography
            variant='h3'
            component='div'
            className={classes.root}
            gutterBottom
          >
            Hi, I'm
          </Typography>
          {transitions(({ ...rest }, animatedItem, key) => (
            <animated.div
              // style={rest}
              style={rest}
            >
              <Typography
                variant='h3'
                component='p'
                className={classes.animation}
                key={key.key}
                style={{ color: key.key === 'Bailee Dastugue' && 'black' }}
              >
                {console.log(key)}
                {animatedItem}
              </Typography>
            </animated.div>
          ))}
        </Box>
      )}
    </InView>
  );
};

export default Welcome;
