import React from 'react';
import Button from '@material-ui/core/Button';
import { Fragment } from 'react';

const CarouselButtons = ({
  index,
  nextCard,
  prevCard,
  slides,
  slidesShowing,
  carouselName,
}) => {
  return (
    <Fragment>
      <h2>{carouselName}</h2>
      <Button onClick={prevCard} disabled={index === 0}>
        Previous
      </Button>
      <Button
        onClick={nextCard}
        disabled={index === slides.length - slidesShowing}
      >
        Next
      </Button>
    </Fragment>
  );
};

export default CarouselButtons;
