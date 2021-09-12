import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 'unset',
    display: 'inline',
  },
});

const CarouselButtons = ({
  index,
  nextCard,
  prevCard,
  slides,
  slidesShowing,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Button
        className={classes.root}
        onClick={prevCard}
        disabled={index === 0}
      >
        <ArrowBackIosSharpIcon />
      </Button>
      <Button
        className={classes.root}
        onClick={nextCard}
        disabled={index === slides.length - slidesShowing}
      >
        <ArrowForwardIosSharpIcon />
      </Button>
    </Fragment>
  );
};

export default CarouselButtons;
