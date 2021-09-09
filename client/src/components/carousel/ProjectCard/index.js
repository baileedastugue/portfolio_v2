import React, { Fragment, useState } from 'react';
import { CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CarouselModal from '../CarouselModal';
import ViewRepoButton from '../../Buttons/ViewRepoButton';
import ViewLiveSiteButton from '../../Buttons/ViewLiveSiteButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    listStyleType: 'none',
    textAlign: 'center',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
  navTitle: {
    textTransform: 'capitalize',
    fontSize: '2rem',
    letterSpacing: '1px',
    listStyleType: 'none',
    fontFamily: ['Vidaloka', 'serif'].join(','),
    [theme.breakpoints.up(1024)]: {
      fontSize: '3rem',
    },
  },
  about: {
    overflow: 'auto',
    height: '25vh',
    border: '1px solid #000',
    padding: '4%',
    '& ul': {
      padding: 0,
    },
    '& li': {
      listStyleType: 'none',
      display: 'inline',
    },
  },
  title: {
    display: 'inline',
    textAlign: 'center',
    marginBottom: '1vh',
  },
  video: {
    height: '40vh',
    margin: '0 auto 5%',
    alignItems: 'center',
    listStyleType: 'none',
    textAlign: 'center',
  },
  sideBtns: {
    height: '12.5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const ProjectCard = ({ slide }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const {
    name,
    videoUrl,
    videoDescription,
    detail,
    techUsed,
    liveSite,
    repo,
    nextSteps,
  } = slide;

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <CardContent onClick={handleOpen} className={`card-nav ${classes.root} `}>
        <Typography
          variant='h4'
          component='li'
          listStyleType='none'
          className={`card-nav--title ${classes.navTitle}`}
        >
          {name}
        </Typography>
      </CardContent>
      <CarouselModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalOpen={modalOpen}
      >
        <Grid container>
          <Grid item xs={12} className={classes.title}>
            <h3>{name}</h3>
          </Grid>
          <Grid item xs={12} className={classes.video}>
            <img
              src={videoUrl}
              alt={videoDescription}
              className={classes.video}
              style={{ height: '40vh' }}
            />
          </Grid>
          <Grid item xs={8} className={classes.about}>
            <h4>Background:</h4> <p>{detail}</p>
            <h4>Built with:</h4>
            <ul>
              {techUsed.map((tech, index) => (
                <li key={index}>{tech}, </li>
              ))}
            </ul>
            <h4>And Beyond:</h4> <p>{nextSteps}</p>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12} className={classes.sideBtns}>
              <ViewRepoButton repoLink={repo} />
            </Grid>
            <Grid item xs={12} className={classes.sideBtns}>
              <ViewLiveSiteButton liveSiteLink={liveSite} />
            </Grid>
          </Grid>
        </Grid>
      </CarouselModal>
    </Fragment>
  );
};

export default ProjectCard;
