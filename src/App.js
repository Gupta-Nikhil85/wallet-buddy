import './App.css';
import Hero from './components/Hero';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Login/>
      <Hero/>
      <Main/>
    </>
  );
}

export default App;
