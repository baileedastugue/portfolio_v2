import './sass/main.scss';
import CircleText from './components/Layout/CircleText';

function App() {
     return (
          <div>
               <CircleText
                    circleId='bailee'
                    placement='top'
                    fontStyle='heading-primary'
                    size='large'
               >
                    &nbsp;Bailee Dastugue
               </CircleText>
               <CircleText
                    circleId='development'
                    placement='bottom'
                    fontStyle='heading-primary'
                    size='large'
               >
                    &nbsp;Development
               </CircleText>
               <CircleText
                    circleId='full'
                    placement='full'
                    fontStyle='heading-primary'
                    size='small'
               >
                    &nbsp;GitHub
               </CircleText>
          </div>
     );
}

export default App;
