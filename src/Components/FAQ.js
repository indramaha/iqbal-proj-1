import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import './FAQ.css'

const FAQ = () => {
    return ( 
        <div className='faq-section' id='faq'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={3} >
                        <h3>FAQ</h3>
                        <p>Yang Sering Ditanyakan Tentang Guide Me</p>
                    </Col>
                    <Col lg={6}>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='faq-accord-item'>
                                <Accordion.Header>Apa itu guide me ?</Accordion.Header>
                                <Accordion.Body>
                                Guide me merupakan web yang dapat membantu wisatawan dalam berlibur di Bali. Guide Me berisi semua informasi tempat wisata yang ada di Bali lengkap dengan harga tiketnya, menyediakan jasa pemandu wisata, dan menyediakan berbagai pilihan penyewaan mobil / motor di Bali.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='faq-accord-item'>
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
                            <Accordion.Item eventKey="2" className='faq-accord-item'>
                                <Accordion.Header>Cara memesan?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Pilih daerah yang ingin di tuju</li>
                                        <li>Click tombol yang ada di halaman tersebut, jika ingin menyewa motor, click "sewa motor"</li>
                                        <li>Lengkapi data diri di form yang sudah tersedia</li>
                                        <li>dan confirmasi ke Whatsapp melalui tombol yang sudah tersedia</li>
                                    </ul>
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