import Homepage from './Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Events from './Events';
import Explore from './Explore';
import Mars from './Mars';

function App(){ 
  return (
  
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='events' element={<Events />} />
      <Route path='explore' element={<Explore />} />
      <Route path='mars' element={<Mars />} />
      </Routes>
      
  );
}

export default App;
