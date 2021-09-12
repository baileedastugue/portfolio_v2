import React, { useState, useCallback, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CarouselButtons from '../CarouselButtons';
import CarouselSlider from '../CarouselSlider';
import { useMediaQuery } from '@material-ui/core';
import CarouselTitle from '../CarouselTitle';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: (styleProps) => ({
    display: 'flex',
    width: styleProps.width,
    justifyContent: styleProps.justifyContent,
    overflowX: 'clip',
    position: 'relative',
    flexBasis: styleProps.flexBasis,
    padding: 0,
    marginBottom: '10%',
    [theme.breakpoints.up(1024)]: {
      marginBottom: '7%',
    },
  }),
  alignTextEnd: {
    textAlign: 'end',
  },
}));

const CarouselContainer = (props) => {
  const [slideWidth, setSlideWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [index, setIndex] = useState(0);

  const { slides, carouselName } = props;

  const nextCard = useCallback(() => {
    setXPosition(xPosition - slideWidth);
    setIndex(index + 1);
  }, [xPosition, slideWidth, index]);

  const prevCard = useCallback(() => {
    setXPosition(xPosition + slideWidth);
    setIndex(index - 1);
  }, [xPosition, slideWidth, index]);

  const theme = useTheme();
  let slidesShowing = 1;
  let styleProps = { width: slideWidth * (slidesShowing + 0.25) + 'px' };
  if (useMediaQuery(theme.breakpoints.up(375))) {
    styleProps = { width: slideWidth * (slidesShowing + 0.5) + 'px' };
  }
  if (useMediaQuery(theme.breakpoints.up('sm'))) {
    slidesShowing = 2;
    if (slides.length <= slidesShowing) {
      styleProps = {
        width: slideWidth * slides.length + 'px',
        justifyContent: 'center',
      };
    } else {
      styleProps = { width: slideWidth * (slidesShowing + 0.5) + 'px' };
    }
  }
  if (useMediaQuery(theme.breakpoints.up(1440))) {
    slidesShowing = 3;
    if (slides.length <= slidesShowing) {
      styleProps = {
        width: slideWidth * slides.length + 'px',
        justifyContent: 'center',
      };
    } else {
      styleProps = { width: slideWidth * (slidesShowing + 0.5) + 'px' };
    }
  }

  const classes = useStyles(styleProps);

  return (
    <Fragment>
      <Grid container alignItems='center'>
        <Grid item xs={6}>
          <CarouselTitle>{carouselName}</CarouselTitle>
        </Grid>
        {slides.length > slidesShowing && (
          <Grid item xs={6} className={classes.alignTextEnd}>
            <CarouselButtons
              prevCard={prevCard}
              nextCard={nextCard}
              index={index}
              slides={slides}
              slidesShowing={slidesShowing}
            />
          </Grid>
        )}
      </Grid>
      <Container fluid='true' className={classes.root}>
        <CarouselSlider
          slides={slides}
          prevCard={prevCard}
          nextCard={nextCard}
          setSlideWidth={setSlideWidth}
          xPosition={xPosition}
        >
          {props.children}
        </CarouselSlider>
      </Container>
    </Fragment>
  );
};

export default CarouselContainer;
