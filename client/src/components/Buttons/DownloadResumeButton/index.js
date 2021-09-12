import React from 'react';
import CircleText from '../../Layout/CircleText';
import { Link, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100px',
    margin: '0 auto',
    height: '120px',
    padding: '10px 0',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
  icon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2.5rem',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  button: {
    marginBottom: '3vh',
  },
}));

const DownloadResumeButton = () => {
  const classes = useStyles();
  return (
    <Button variant='contained' className={classes.button}>
      <Link
        href='/files/BaileeDastugue_resume.pdf'
        color='inherit'
        target='_blank'
        hover='none'
        download
      >
        <Box className={classes.root}>
          <CircleText
            circleId='download'
            placement='top'
            fontStyle='heading-primary'
            size='small'
            specificClass='download'
          >
            &nbsp;&nbsp;&nbsp;&nbsp;download
          </CircleText>
          <CircleText
            circleId='pdf'
            placement='bottom'
            fontStyle='heading-primary'
            size='small'
            specificClass='pdf'
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PDF
          </CircleText>
          <GetAppSharpIcon fontStyle='large' className={classes.icon} />
        </Box>
      </Link>
    </Button>
  );
};

export default DownloadResumeButton;
