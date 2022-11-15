import './App.css';
import NavigationBar from './Components/NavigationBar';
import Hero from './Components/Hero';
import OurServices from './Components/OurServices';
import Kabupaten from './Components/Kabupaten';

function App() {
  return (
    <>
      <NavigationBar />
      <div className='app-hero-ourservices'>
        <div className='app-hero'>
          <Hero />
        </div>
        <div className='app-ourservices'>
          <OurServices/>
        </div>
      </div>
      <div>
        <Kabupaten/>
      </div>
    </>
   

  );
}

export default App;
