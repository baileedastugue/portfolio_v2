import React, { Fragment, useState } from 'react';
import { CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CarouselModal from '../CarouselModal';
import ViewRepoButton from '../../Buttons/ViewRepoButton';
import ViewLiveSiteButton from '../../Buttons/ViewLiveSiteButton';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    listStyleType: 'none',
    textAlign: 'center',
  },
  about: {
    overflow: 'auto',
    height: '20vh',
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
  },
  video: {
    maxHeight: '30vh',
    margin: '0 auto 5%',
  },
  sideBtns: {
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

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
          <Grid item xs={12} className={classes.root}>
            <img
              src={videoUrl}
              alt={videoDescription}
              className={classes.video}
            />
          </Grid>
          <Grid item xs={9} className={classes.about}>
            <h4>Background:</h4> <p>{detail}</p>
            <h4>Built with:</h4>
            <ul>
              {techUsed.map((tech, index) => (
                <li key={index}>{tech}, </li>
              ))}
            </ul>
            <h4>And Beyond:</h4> <p>{nextSteps}</p>
          </Grid>
          <Grid item xs={3}>
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
