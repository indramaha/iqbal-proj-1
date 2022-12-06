import Logo from '../Assets/GUIDE ME-01.png'
import {FiInstagram, FiFacebook} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import {TbBrandWhatsapp} from 'react-icons/tb'

import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className='footer-logo'>
                            <div className='footer-copyright'>
                                <p className='footer-copyright-p'>Copyright GuideMe 2022</p>
                            </div>
                            <div className='footer-logo-bg'>
                                <img src={Logo} alt='logo' className='footer-logo-img'/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='footer-kabupaten'>
                            <p className='footer-kabupaten-title-p'>Wisata di</p>
                            <div className='footer-kabupaten-bg'>
                                <div>
                                    <Link to={'/jembrana'} className='link'><p className='footer-kabupaten-text-p'>Jembrana</p></Link>
                                    <Link to={'/tabanan'} className='link'><p className='footer-kabupaten-text-p'>Tabanan</p></Link>
                                    <Link to={'/badung'} className='link'><p className='footer-kabupaten-text-p'>Badung</p></Link>
                                </div>
                                <div>
                                    <Link to={'/karangasem'} className='link'><p className='footer-kabupaten-text-p'>Karangasem</p></Link>
                                    <Link to={'/klungkung'} className='link'><p className='footer-kabupaten-text-p'>Klungkung</p></Link>
                                    <Link to={'/gianyar'} className='link'><p className='footer-kabupaten-text-p'>Gianyar</p></Link>
                                </div>
                                <div>
                                    <Link to={'/singaraja'} className='link'><p className='footer-kabupaten-text-p'>Singaraja</p></Link>
                                    <Link to={'/bangli'} className='link'><p className='footer-kabupaten-text-p'>Bangli</p></Link>
                                    <Link to={'/denpasar'} className='link'><p className='footer-kabupaten-text-p'>Denpasar</p></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='footer-sosmed'>
                            <p className='footer-sosmed-title-p'>Sosial Media</p>
                            <div className='footer-sosmed-bg'>
                                <div className='footer-icon-instagram'>
                                    <FiInstagram size={20}/>
                                </div>
                                <div className='footer-icon-facebook'>
                                    <FiFacebook size={20}/>
                                </div>
                                <div className='footer-icon-tiktok'>
                                    <FaTiktok size={20}/>
                                </div>
                                <div className='footer-icon-whatsapp'>
                                    <TbBrandWhatsapp size={20}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
     );
}
 
export default Footer;