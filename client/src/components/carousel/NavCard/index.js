import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
  },
  navTitle: {
    listStyleType: 'none',
    textTransform: 'uppercase',
    wordWrap: 'break-word',
    fontSize: '4rem',
    letterSpacing: '.1rem',
  },
  navDetails: {
    opacity: 0,
  },
});

const NavCard = ({ slide }) => {
  console.log(slide);
  const classes = useStyles();

  return (
    <CardContent className={`card-nav ${classes.root} `}>
      <Typography
        variant='h2'
        component='li'
        listStyleType='none'
        className={`card-nav--title ${classes.navTitle}`}
      >
        {slide.name}
      </Typography>
      {/* <Typography
        variant='p'
        className={`card-nav--details ${classes.navDetails}`}
      >
        {slide.detail}
      </Typography> */}
    </CardContent>
  );
};

export default NavCard;
