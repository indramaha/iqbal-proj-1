import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'

function IndividualIntervalsExample() {
  return (
    <Carousel className='carosel'>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 hero-image"
          src="https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Ubud"
        />
        <Carousel.Caption>
          <h3 className='hero-carousel-caption-h3'>UBUD</h3>
          <p className='hero-carousel-caption-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 hero-image"
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="TABANAN"
        />
        <Carousel.Caption>
          <h3 className='hero-carousel-caption-h3'>TABANAN</h3>
          <p className='hero-carousel-caption-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 hero-image"
          src="https://images.unsplash.com/photo-1546484458-6904289cd4f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="CANGGU"
        />
        <Carousel.Caption>
          <h3 className='hero-carousel-caption-h3'>CANGGU</h3>
          <p className='hero-carousel-caption-p'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;