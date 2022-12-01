import NavigationBar from '../Components/NavigationBar';
import Hero from '../Components/Hero';
import OurServices from '../Components/OurServices';
import Kabupaten from '../Components/Kabupaten';

const HomePage = () => {
    return(
        <div>
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
        </div>
    )
}

export default HomePage;