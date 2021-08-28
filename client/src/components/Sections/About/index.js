import React from 'react';
import CarouselContainer from '../../Carousel/CarouselContainer';
import Card from '../../Carousel/Card';

const About = () => {
     return (
          <CarouselContainer carouselId='new'>
               <Card className='active'>Hello</Card>
          </CarouselContainer>
     );
};

export default About;
