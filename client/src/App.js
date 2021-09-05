import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './sass/main.scss';
import { Container } from '@material-ui/core';

import Nav from './components/Layout/Nav';
import NavCard from './components/Carousel/NavCard';
import CarouselContainer from './components/Carousel/CarouselContainer';
import navCardData from './data/navCardData.json';
import Welcome from './components/Sections/Welcome';
import TechStack from './components/Sections/TechStack';
import About from './components/Sections/About';
import Resume from './components/Sections/Resume';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

const App = (props) => {
  return (
    <CssBaseline>
      <Nav />
      <Container>
        <Welcome id='welcome' />
        <CarouselContainer slides={navCardData} carouselName='Learn more'>
          <NavCard {...props} />
        </CarouselContainer>
        <About id='about' />
        <TechStack id='techStack' />
        <Projects id='projects' />
        <Resume id='resume' />
        <Contact id='contact' />
      </Container>
    </CssBaseline>
  );
};

export default App;
