import './sass/main.scss';
import Nav from './components/Layout/Nav';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import CarouselSlider from './components/Carousel/CarouselContainer';

const App = () => {
  const slides = [
    { id: 0, name: 'Slide 0', msg: 'I love baby' },
    { id: 1, name: 'Slide 1', msg: 'I love jack' },
    { id: 2, name: 'Slide 2', msg: 'jack is my perfect husband' },
    { id: 3, name: 'Slide 3', msg: 'my loml' },
    { id: 4, name: 'Slide 4', msg: 'I love Mr. Baby' },
    { id: 5, name: 'Slide 5', msg: 'Mr. and Mrs. Baby' },
  ];
  return (
    <Provider store={store}>
      <CssBaseline>
        <Nav />
      </CssBaseline>
      <CarouselSlider slides={slides} carouselName='First Carousel' />
    </Provider>
  );
};

export default App;
