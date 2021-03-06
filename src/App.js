import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<> <Navbar /> <Hero /> <Main /> </>} />
          <Route path="/login" element={<> <Navbar /> <Login/></>} />
        </Routes>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Main/> */}
      </Router>
    </>
  );
}

export default App;
