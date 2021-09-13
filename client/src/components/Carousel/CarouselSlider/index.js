import React, { useRef, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDrag } from 'react-use-gesture';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  cardDisplayed: {
    margin: '0 10px 0 0',
    width: '200px',
    height: '100%',
    padding: 0,
    transition: 'transform 0.6s ease-in-out',
    borderRadius: 0,
    [theme.breakpoints.up(425)]: {
      width: '200px',
      margin: '0 15px 0',
    },
    [theme.breakpoints.up(1024)]: {
      width: '300px',
    },
  },
  carouselContainer: {
    display: 'flex',
  },
}));

const CarouselSlider = (props) => {
  const {
    slides,
    xPosition,
    setSlideWidth,
    nextCard,
    prevCard,
    index,
    slidesShowing,
  } = props;

  const slideRef = useRef(0);

  useEffect(() => {
    const slideCurrentWidth = slideRef.current.clientWidth;
    setSlideWidth(slideCurrentWidth);
  }, [setSlideWidth]);

  const bind = useDrag(
    ({ event, down, movement: [mx], direction: [xDir], tap, click }) => {
      if (isMobile) {
        if (!down && !tap && !click) {
          if (xDir < 0) {
            if (index < slides.length - slidesShowing) {
              nextCard();
            }
          } else {
            if (index > 0) {
              prevCard();
            }
          }
        }
      }
    },
    { delay: true }
  );

  const classes = useStyles();

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item className={classes.carouselContainer} xs={12}>
        {slides.map((slide, i) => (
          <Grid
            item
            key={i}
            ref={slideRef}
            xposition={xPosition}
            {...bind()}
            style={{ touchAction: 'none' }}
          >
            <Card
              className={`${classes.cardDisplayed}`}
              style={{
                transform: `translateX(${xPosition}px)`,
              }}
            >
              {React.cloneElement(props.children, {
                slide: slide,
              })}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CarouselSlider;
