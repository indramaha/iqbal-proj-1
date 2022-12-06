import NavigationBar from '../Components/NavigationBar';
import Hero from '../Components/Hero';
import OurServices from '../Components/OurServices';
import Kabupaten from '../Components/Kabupaten';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';

const HomePage = () => {
    return(
        <div>
            <NavigationBar isTextShow={true}/>
            <Hero />
            <OurServices/>
            <Kabupaten/>
            <FAQ />
            <Footer />
        </div>
    )
}

export default HomePage;