import React from 'react';
import CircleText from '../../Layout/CircleText';
import { Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';

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

const DownloadResumeButton = () => {
  const classes = useStyles();
  return (
    <Link color='inherit' target='_blank' hover='none'>
      <Box className={classes.root}>
        <CircleText
          circleId='pdf'
          placement='top'
          fontStyle='heading-primary'
          size='small'
          specificClass='pdf'
        >
          &nbsp;&nbsp;download PDF
        </CircleText>
        <GetAppSharpIcon fontStyle='large' className={classes.icon} />
      </Box>
    </Link>
  );
};

export default DownloadResumeButton;
