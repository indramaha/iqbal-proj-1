import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavigationBar.css"

function NavigationBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar sticky='top' key={expand} expand={expand} className="all-navbar" variant='dark'>
          <Container>
            <Navbar.Brand href="#">Guide-ME</Navbar.Brand>
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
                  <Nav.Link className='ms-3' href="#action2">Our Services</Nav.Link>
                  <Nav.Link className='ms-3' href="#action2">Why Us</Nav.Link>
                  <Nav.Link className='ms-3' href="#action2">Rent Car</Nav.Link>
                  <Nav.Link className='ms-3' href="#action2">Rent Bike</Nav.Link>
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