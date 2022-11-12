import './App.css';
import NavigationBar from './Components/NavigationBar';
import Hero from './Components/Hero';
import OurServices from './Components/OurServices';

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
    </>
   

  );
}

export default App;
