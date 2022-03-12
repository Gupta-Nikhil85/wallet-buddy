import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Login from './components/Login';
import Main from './components/Main';


import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>  <Hero /> <Main /> </>} />
        </Routes>
      </Router>
    <PushToTalkButtonContainer>
      <PushToTalkButton/>
      <ErrorPanel/>
      
    </PushToTalkButtonContainer>
    </>
  );
}

export default App;
