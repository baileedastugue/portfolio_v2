import React, { useRef, useEffect, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavCard from '../NavCard';

const useStyles = makeStyles((theme) => ({
  cardDisplayed: {
    display: 'block',
    margin: '10px 20px 10px 0',
    padding: '5px',
    minWidth: '150px',
    height: '200px',
    transition: 'transform 0.6s ease-in-out',
    [theme.breakpoints.up(425)]: {
      backgroundColor: 'blue',
      // width: '200px',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'red',
    },
  },
  // needed
  carouselContainer: {
    display: 'flex',
  },
}));

const CarouselSlider = (props) => {
  const { slides, xPosition, setSlideWidth } = props;

  const slideRef = useRef();

  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      setSlideWidth(slideWidth);
    }
  }, [setSlideWidth]);

  const classes = useStyles();

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item className={classes.carouselContainer} xs={12}>
        {slides.map((slide, i) => (
          <Grid item key={i} ref={slideRef} xPosition={xPosition}>
            <Card
              className={classes.cardDisplayed}
              style={{
                transform: `translateX(${xPosition}px)`,
              }}
              xs={6}
            >
              {React.cloneElement(props.children, { slide: slide })}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CarouselSlider;
