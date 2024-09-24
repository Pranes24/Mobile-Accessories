import About from './About.js';
import './App.css';
import Contactus from './Contactus.js';
import Endcard from './Endcard.js';
import Home from './Home';
import Navbar from './Navbar';
import Becomeaseller from './Becomeaseller.js'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Becomeaseller' element={<Becomeaseller/>}/>
      </Routes>
      <Endcard></Endcard>
    </div>
  );
}

export default App;
