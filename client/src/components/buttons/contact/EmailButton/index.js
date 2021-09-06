import React from 'react';
import CircleText from '../../../Layout/CircleText';
import { Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100px',
    margin: '0 auto',
    height: '120px',
    padding: '10px 0',
  },
  icon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2.5rem',
  },
}));

const EmailButton = () => {
  const classes = useStyles();
  return (
    <Link
      href='mailto: bailee.dast@gmail.com'
      color='inherit'
      target='_blank'
      hover='none'
    >
      <Box className={classes.root}>
        <CircleText
          circleId='sendEmail'
          placement='top'
          fontStyle='heading-primary'
          size='small'
          specificClass='sendEmail'
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shoot me
        </CircleText>
        <CircleText
          circleId='email'
          placement='bottom'
          fontStyle='heading-primary'
          size='small'
          specificClass='email'
        >
          &nbsp;&nbsp;&nbsp;an email
        </CircleText>
        <MailOutlineSharpIcon fontStyle='large' className={classes.icon} />
      </Box>
    </Link>
  );
};

export default EmailButton;
