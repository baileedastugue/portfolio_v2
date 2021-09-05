import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import CarouselContainer from '../../Carousel/CarouselContainer';
import projectsData from '../../../data/projectsData.json';
import ProjectCard from '../../Carousel/ProjectCard';

const Projects = () => {
  return (
    <Fragment>
      <Typography variant='h2'>Projects</Typography>
      <CarouselContainer slides={projectsData}>
        <ProjectCard />
      </CarouselContainer>
    </Fragment>
  );
};

export default Projects;
