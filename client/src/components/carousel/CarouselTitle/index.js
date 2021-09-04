import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'inline',
    fontSize: '1.7rem',
  },
});

const CarouselTitle = (props) => {
  const classes = useStyles();
  return <h2 className={classes.root}>{props.children}</h2>;
};

export default CarouselTitle;
