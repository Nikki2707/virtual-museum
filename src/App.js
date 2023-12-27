import Homepage from './Homepage';
import './App.css';

import Nav from 'react-bootstrap/Nav';

import { Button } from 'react-bootstrap';

import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Login from './Login';
import SignUp from './SignUp';
import Events from './Events';

function App(){ 
  return (
  
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='events' element={<Events />} />
      </Routes>
      
  );
}

export default App;
