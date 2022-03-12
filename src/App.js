import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';

import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'

function App() {
  return (
    <>
    <Hero/>
    <Main/>
    <PushToTalkButtonContainer>
      <PushToTalkButton/>
      <ErrorPanel/>
      
    </PushToTalkButtonContainer>
    </>
  );
}

export default App;
