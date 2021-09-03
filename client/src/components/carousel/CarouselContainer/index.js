import React, { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CarouselButtons from '../CarouselButtons';
import CarouselSlider from '../CarouselSlider';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  root: (props) => ({
    display: 'flex',
    width: props.width,
    overflowX: 'clip',
    position: 'relative',
    padding: 0,
  }),
});

const CarouselContainer = ({ slides, carouselName }) => {
  const [slideWidth, setSlideWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [index, setIndex] = useState(0);

  const nextCard = useCallback(() => {
    setXPosition(xPosition - slideWidth);
    setIndex(index + 1);
    //eslint-disable-next-line
  }, [xPosition, slideWidth]);

  const prevCard = useCallback(() => {
    setXPosition(xPosition + slideWidth);
    setIndex(index - 1);
    //eslint-disable-next-line
  }, [xPosition, slideWidth]);

  let slidesShowing = 1;

  const theme = useTheme();
  if (useMediaQuery(theme.breakpoints.up(425))) {
    slidesShowing = 2;
  }
  if (useMediaQuery(theme.breakpoints.up('sm'))) {
    slidesShowing = 3;
  }

  const props = { width: slideWidth * (slidesShowing + 0.5) + 'px' };
  const classes = useStyles(props);

  return (
    <Container fluid>
      <CarouselButtons
        prevCard={prevCard}
        nextCard={nextCard}
        index={index}
        slides={slides}
        slidesShowing={slidesShowing}
        carouselName={carouselName}
      />
      <Container className={classes.root}>
        <CarouselSlider
          items={slides}
          prevCard={prevCard}
          nextCard={nextCard}
          setSlideWidth={setSlideWidth}
          xPosition={xPosition}
        />
      </Container>
    </Container>
  );
};

export default CarouselContainer;
