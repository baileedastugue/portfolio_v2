import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    listStyleType: 'none',
  },
});

const ProjectCard = ({ slide }) => {
  const classes = useStyles();

  return (
    <CardContent className={`card-nav ${classes.root} `}>
      <Typography
        variant='h4'
        component='li'
        listStyleType='none'
        className={`card-nav--title ${classes.navTitle}`}
      >
        {slide.name}
      </Typography>
    </CardContent>
  );
};

export default ProjectCard;
