import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import './FAQ.css'

const FAQ = () => {
    return ( 
        <div className='faq-section'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={3} >
                        <h3>FAQ</h3>
                        <p>Yang Sering Ditanyakan Tentang Guide Me</p>
                    </Col>
                    <Col lg={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Apa itu guide me ?</Accordion.Header>
                                <Accordion.Body>
                                Guide me merupakan web yang dapat membantu wisatawan dalam berlibur di Bali. Guide Me berisi semua informasi tempat wisata yang ada di Bali lengkap dengan harga tiketnya, menyediakan jasa pemandu wisata, dan menyediakan berbagai pilihan penyewaan mobil / motor di Bali.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Kenapa memilih Guide me?</Accordion.Header>
                                <Accordion.Body>
                                    Keuntungan menggunakan Guide Me:
                                    <ul>
                                        <li>Mempermudah wisatawan dalam mencari informasi tempat wisata di Bali</li>
                                        <li>Mempermudah wisatawan dalam memilih jasa pemandu wisata</li>
                                        <li>Mempermudah wisatawan dalam menyewa mobil / motor di Bali</li>
                                        <li>Mempermudah wisatawan dalam melakukan transaksi</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FAQ;