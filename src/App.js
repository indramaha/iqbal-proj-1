import './App.css';
import NavigationBar from './Components/NavigationBar';
import Hero from './Components/Hero';
import OurServices from './Components/OurServices';
import Kabupaten from './Components/Kabupaten';

function App() {
  return (
    <>
      <NavigationBar />
      <div >
        <Hero />
      </div>
      <div>
        <OurServices/>
      </div>
      <div>
        <Kabupaten/>
      </div>
    </>
   

  );
}

export default App;
