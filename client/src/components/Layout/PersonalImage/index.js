import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import PersonalImg from './personalImg.jpg';
import BellaImg from './bellaImg.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '-5px',
    right: '-25px',
    height: '150px',
    width: '150px',
    borderRadius: '100%',
    backgroundImage: `url(${PersonalImg})`,
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
      right: '-15px',
      height: '270px',
      width: '270px',
    },
    [theme.breakpoints.up(1024)]: {
      bottom: '-125px',
      right: '35px',
      height: '320px',
      width: '320px',
    },
    [theme.breakpoints.up(1440)]: {
      bottom: '-155px',
      right: '25px',
      height: '350px',
      width: '350px',
    },
  },
  cat: {
    backgroundColor: theme.palette.primary.light,
    position: 'absolute',
    bottom: '0px',
    right: '95px',
    height: '40px',
    width: '40px',
    borderRadius: '100%',
    [theme.breakpoints.up(375)]: {
      bottom: '-10px',
      right: '105px',
      height: '45px',
      width: '45px',
    },
    [theme.breakpoints.up(425)]: {
      bottom: '-40px',
      right: '125px',
    },
    [theme.breakpoints.up(768)]: {
      bottom: '-55px',
      right: '200px',
      height: '110px',
      width: '110px',
      backgroundImage: `url(${BellaImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top right',
      borderColor: theme.palette.primary.light,
      border: '5px solid',
    },
    [theme.breakpoints.up(1024)]: {
      bottom: '-120px',
      right: '285px',
      height: '125px',
      width: '125px',
    },
    [theme.breakpoints.up(1024)]: {
      bottom: '-145px',
      right: '300px',
      height: '135px',
      width: '135px',
    },
  },
}));

const PersonalImage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root} />
      <div className={classes.cat} />
    </Fragment>
  );
};

export default PersonalImage;
