import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '-5px',
    right: '-25px',
    height: '150px',
    width: '150px',
    borderRadius: '100%',
    backgroundImage:
      'url(https://res.cloudinary.com/dp9ndx3oj/image/upload/v1594142495/xc7c1orpciacprspsze0.jpg)',
    backgroundSize: 'cover',
    [theme.breakpoints.up(375)]: {
      bottom: '-10px',
      right: '-15px',
    },
    [theme.breakpoints.up(425)]: {
      bottom: '-50px',
      right: '-5px',
      height: '170px',
      width: '170px',
    },
    [theme.breakpoints.up(768)]: {
      bottom: '-40px',
      height: '250px',
      width: '250px',
    },
    [theme.breakpoints.up(1024)]: {
      bottom: '-115px',
      right: '85px',
      height: '300px',
      width: '300px',
    },
    [theme.breakpoints.up(1024)]: {
      bottom: '-155px',
      right: '25px',
      height: '330px',
      width: '330px',
    },
  },
}));

const PersonalImage = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default PersonalImage;
