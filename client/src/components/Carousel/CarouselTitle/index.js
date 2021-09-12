import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'inline',
    fontSize: '1.7rem',
  },
});

const CarouselTitle = (props) => {
  const classes = useStyles();
  return (
    <Typography vairant='h2' className={classes.root}>
      {props.children}
    </Typography>
  );
};

export default CarouselTitle;
