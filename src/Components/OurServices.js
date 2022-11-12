import {Container, Row, Col } from "react-bootstrap"
import Image from "../Assets/whyus.png"
import "./OurServices.css"
import {FiCheck} from "react-icons/fi"


function OurServices(){
    return (
        <div className="ourservices-section">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5} lg={5} md={9} xs={12} className="ourservices-col-image" >
                        <img className="ourservices-section-image" src={Image} alt="whyus"></img>
                    </Col>
                    <Col xl={6} lg={5} md={9} xs={11} className="ourservices-col-desc">
                        <Row>
                            <Col xl={10}>
                                <h4 className="ourservices-desc-h4">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
                            </Col>
                            <Col xl={10}>
                                <p className="ourservices-desc-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </Col>
                            <Col xl={10}>
                                <div className="ourservices-check">
                                    <div className="ourservices-check-bg">
                                        <FiCheck size={16} className="ourservices-check-icon"/>
                                    </div>
                                    <div className="ourservices-check-text">
                                        <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                                    </div>
                                </div>
                                <div className="ourservices-check">
                                    <div className="ourservices-check-bg">
                                        <FiCheck size={16} className="ourservices-check-icon"/>
                                    </div>
                                    <div className="ourservices-check-text">
                                        <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                    </div>
                                </div>
                                <div className="ourservices-check">
                                    <div className="ourservices-check-bg">
                                        <FiCheck size={16} className="ourservices-check-icon"/>
                                    </div>
                                    <div className="ourservices-check-text">
                                        <p>Sewa Mobil Jangka Panjang Bulanan</p>
                                    </div>
                                </div>
                                <div className="ourservices-check">
                                    <div className="ourservices-check-bg">
                                        <FiCheck size={16} className="ourservices-check-icon"/>
                                    </div>
                                    <div className="ourservices-check-text">
                                        <p>Gratis Antar - Jemput Mobil di Bandara</p>
                                    </div>
                                </div>
                                <div className="ourservices-check">
                                    <div className="ourservices-check-bg">
                                        <FiCheck size={16} className="ourservices-check-icon"/>
                                    </div>
                                    <div className="ourservices-check-text">
                                        <p>Layanan Airport Transfer / Drop In Out</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices;