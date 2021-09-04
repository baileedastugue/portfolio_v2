import './sass/main.scss';
import Nav from './components/Layout/Nav';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavCard from './components/Carousel/NavCard';
import CarouselContainer from './components/Carousel/CarouselContainer';
import navCardData from './data/navCardData.json';
import Welcome from './components/Sections/Welcome';
import TechStack from './components/Sections/TechStack';
import { Container } from '@material-ui/core';

const App = (props) => {
  return (
    <Provider store={store}>
      <CssBaseline>
        <Nav />
        <Container>
          <Welcome />
          <CarouselContainer slides={navCardData} carouselName='Learn more'>
            <NavCard {...props} />
          </CarouselContainer>
          <TechStack />
        </Container>
      </CssBaseline>
    </Provider>
  );
};

export default App;
