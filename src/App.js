import { Route, Routes } from 'react-router';
import './App.css';
import Badung from './Pages/Badung';
import Bangli from './Pages/Bangli';
import Denpasar from './Pages/Denpasar';
import Gianyar from './Pages/Gianyar';
import HomePage from './Pages/HomePage';
import Jembrana from './Pages/Jembrana';
import Karangasem from './Pages/Karangasem';
import Klungkung from './Pages/Klungkung';
import Singaraja from './Pages/Singaraja';
import Tabanan from './Pages/Tabanan';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/tabanan' element={<Tabanan />}/>
      <Route path='/jembrana' element={<Jembrana />}/>
      <Route path='/badung' element={<Badung />}/>
      <Route path='/singaraja' element={<Singaraja />}/>
      <Route path='/karangasem' element={<Karangasem />}/>
      <Route path='/klungkung' element={<Klungkung />}/>
      <Route path='/bangli' element={<Bangli />}/>
      <Route path='/gianyar' element={<Gianyar />}/>
      <Route path='/denpasar' element={<Denpasar />}/>
    </Routes>
  );
}

export default App;
