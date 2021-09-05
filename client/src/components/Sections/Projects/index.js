import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CarouselContainer from '../../Carousel/CarouselContainer';
import projectsData from '../../../data/projectsData.json';
import ProjectCard from '../../Carousel/ProjectCard';

const Projects = (props) => {
  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2'>Projects</Typography>
      <CarouselContainer slides={projectsData}>
        <ProjectCard />
      </CarouselContainer>
    </Box>
  );
};

export default Projects;
