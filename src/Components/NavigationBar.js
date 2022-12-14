import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Logo from '../Assets/GUIDE ME-01.png'
import "./NavigationBar.css"

function NavigationBar(props) {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar sticky='top' key={expand} expand={expand} className="all-navbar" variant='dark'>
          <Container>
            <Navbar.Brand>
              <Col>
                <Link to={'/'} className='navbar-logo-link'>
                  <div className='navbar-logo-bg'>
                    <img src={Logo} alt='logo' className='navbar-logo-img'/>
                    <p className='navbar-logo-p'>Make Your Trip Easier</p>
                  </div>
                </Link>
              </Col>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            className='ofcan'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Guide-ME
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='ms-3' href="#ourservices">Our Services</Nav.Link>
                  <Nav.Link className='ms-3' href="#explore-bali">Wisata</Nav.Link>
                  <Nav.Link className='ms-3' href="#faq">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;