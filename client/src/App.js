import './sass/main.scss';
import Nav from './components/Layout/Nav';
import { Provider } from 'react-redux';
import store from './store';
// import About from './components/Sections/About';
// import { createTheme, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
     return (
          <Provider store={store}>
               <CssBaseline>
                    <Nav />
               </CssBaseline>
               {/* <About /> */}
          </Provider>
     );
};

export default App;
