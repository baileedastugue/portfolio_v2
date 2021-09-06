import React, { useRef, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardDisplayed: {
    margin: '10px 10px 10px 0',
    width: '200px',
    flexDirection: 'column',
    height: '100%',
    display: 'flex',
    padding: 0,
    transition: 'transform 0.6s ease-in-out',
    justifyContent: 'center',
    borderRadius: 0,
    [theme.breakpoints.up(425)]: {
      width: '200px',
      margin: '10px 25px 20px 0',
    },
    // [theme.breakpoints.up('sm')]: {
    //   width: '20px',
    // },
  },
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
