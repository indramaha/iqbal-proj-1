import {Container, Row, Col } from "react-bootstrap"
import Image from "../Assets/whyus.png"
import "./OurServices.css"
import {FiCheck} from "react-icons/fi"


function OurServices(){
    return (
        <div className="ourservices-section">
            <Container>
                <Row className="justify-content-center ourservices-row-parent">
                    <Col xl={5} lg={5} md={9} xs={12} className="ourservices-col-image" >
                        <img className="ourservices-section-image" src={Image} alt="whyus"></img>
                    </Col>
                    <Col xl={6} lg={5} md={9} xs={11} className="ourservices-col-desc">
                        <Row>
                            <Col xl={10} className="ourservices-desc-col-title">
                                <h4 className="ourservices-desc-h4">Best Tour and Travel Services in Bali!</h4>
                            </Col>
                            <Col xl={10}>
                                <p className="ourservices-desc-p">
                                    Guide me provides a car or bike rental service near the tourist location with a good choice & the best price
                                    Makes it easier for you to explore Bali
                                </p>
                            </Col>
                            <Col xl={10}>
                                <Row>
                                    <div className="ourservices-check">
                                        <Col xs={1}>
                                            <div className="ourservices-check-bg">
                                                <FiCheck size={16} className="ourservices-check-icon"/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="ourservices-check-text">
                                                <p className="ourservices-check-text-p">Sewa Mobil Dengan Supir atau Motor di Bali 12 Jam</p>
                                            </div>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="ourservices-check">
                                        <Col xs={1}>
                                            <div className="ourservices-check-bg">
                                                <FiCheck size={16} className="ourservices-check-icon"/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="ourservices-check-text">
                                                <p className="ourservices-check-text-p">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                            </div>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="ourservices-check">
                                        <Col xs={1}>
                                            <div className="ourservices-check-bg">
                                                <FiCheck size={16} className="ourservices-check-icon"/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="ourservices-check-text">
                                                <p className="ourservices-check-text-p">Sewa Mobil atau Motor Jangka Panjang Bulanan</p>
                                            </div>
                                        </Col>
                                        
                                    </div>
                                </Row>
                                <Row>
                                    <div className="ourservices-check">
                                        <Col xs={1}>
                                            <div className="ourservices-check-bg">
                                                <FiCheck size={16} className="ourservices-check-icon"/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="ourservices-check-text">
                                                <p className="ourservices-check-text-p">Gratis Antar - Jemput Mobil di Bandara</p>
                                            </div>
                                        </Col>
                                        
                                    </div>
                                </Row>
                                <Row>
                                    <div className="ourservices-check">
                                        <Col xs={1}>
                                            <div className="ourservices-check-bg">
                                                <FiCheck size={16} className="ourservices-check-icon"/>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="ourservices-check-text">
                                                <p className="ourservices-check-text-p">Layanan Airport Transfer / Drop In Out</p>
                                            </div>
                                        </Col>
                                        
                                    </div>
                                </Row>
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices;