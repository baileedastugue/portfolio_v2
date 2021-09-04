import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    display: 'flex',
  },
});

const NavCard = ({ slide }) => {
  const classes = useStyles();
  console.log(slide);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h2'>{slide.name}!!!</Typography>
      </CardContent>
    </Card>
  );
};

export default NavCard;
