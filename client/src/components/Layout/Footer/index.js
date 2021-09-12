import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: '7vh',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' color='primary' className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item xs={12}>
            <Typography>&copy; Bailee Dastugue 2021</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
