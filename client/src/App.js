import './sass/main.scss';
import Nav from './components/Layout/Nav';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavCard from './components/Carousel/NavCard';
import CarouselContainer from './components/Carousel/CarouselContainer';
import navCardData from './components/Carousel/NavCard/navCardData.json';

const App = (props) => {
  // console.log(navCardData);s
  return (
    <Provider store={store}>
      <CssBaseline>
        {/* <Nav /> */}
        <CarouselContainer slides={navCardData} carouselName='Learn more'>
          <NavCard {...props} />
        </CarouselContainer>
      </CssBaseline>
    </Provider>
  );
};

export default App;
