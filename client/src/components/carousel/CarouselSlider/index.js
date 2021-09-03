import React, { Fragment, useRef, useEffect, useTheme } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardDisplayed: {
    display: 'block',
    margin: '20px 10px',
    padding: '5px',
    width: '150px',
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

const CarouselSlider = ({ items, xPosition, setSlideWidth }) => {
  const slideRef = useRef();

  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      setSlideWidth(slideWidth);
    }
  }, [setSlideWidth]);

  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} className={classes.carouselContainer}>
          {items.map((item, i) => (
            <Fragment key={i}>
              <Grid ref={slideRef} item xPosition={xPosition}>
                <Card
                  className={classes.cardDisplayed}
                  style={{
                    transform: `translateX(${xPosition}px)`,
                  }}
                >
                  {item.name}
                  <br />
                  My message to my love: {item.msg}
                </Card>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CarouselSlider;
