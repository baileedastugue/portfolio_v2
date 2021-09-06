import React, { useState, useCallback, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CarouselButtons from '../CarouselButtons';
import CarouselSlider from '../CarouselSlider';
import { useMediaQuery } from '@material-ui/core';
import CarouselTitle from '../CarouselTitle';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: (styleProps) => ({
    display: 'flex',
    width: styleProps.width,
    overflowX: 'clip',
    position: 'relative',
    padding: 0,
    marginBottom: '10%',
  }),
  alignTextEnd: {
    textAlign: 'end',
  },
});

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
    styleProps = { width: slideWidth * (slidesShowing + 0.5) + 'px' };
  }

  const classes = useStyles(styleProps);

  return (
    <Fragment>
      <Grid container alignItems='center'>
        <Grid item xs={6}>
          <CarouselTitle>{carouselName}</CarouselTitle>
        </Grid>
        <Grid item xs={6} className={classes.alignTextEnd}>
          <CarouselButtons
            prevCard={prevCard}
            nextCard={nextCard}
            index={index}
            slides={slides}
            slidesShowing={slidesShowing}
          />
        </Grid>
      </Grid>
      <Container fluid className={classes.root}>
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
