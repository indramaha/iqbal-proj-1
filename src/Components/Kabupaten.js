import {Row, Col, Card, Button} from "react-bootstrap"
import "./Kabupaten.css"

function Kabupaten(){
    return(
        <div className="kabupaten-section">
            <Row className="kabupaten-row-parent">
                <Col lg={3} className="kabupaten-col-parent-1">
                    <Card>
                        <Card.Img src="https://images.unsplash.com/photo-1613691246596-1f2865a17dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=522&q=80" alt="image-jembrana" className="image-col-1"/>
                        <Card.ImgOverlay>
                            <div className="kabupaten-card-text">
                                <Row className="kabupaten-card-text-col-1-row">
                                    <Col className="kabupaten-card-text-col-1-row-col-1">
                                        <h1 className="kabupaten-card-text-col-1-row-col-1-h1">JEMBRANA</h1>
                                    </Col>
                                    <Col>
                                        <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                    </Col>
                                </Row>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col lg={9} className="kabupaten-col-parent-2">
                    <Row className="kabupaten-col-2-row-1">
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card >
                                <Card.Img src="https://images.unsplash.com/photo-1577849607050-d4ec7abe90bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image-Tabanan" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">TABANAN</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card >
                                <Card.Img src="https://images.unsplash.com/photo-1578382253799-7977dc233c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image-Badung" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">BADUNG</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card >
                                <Card.Img src="https://images.unsplash.com/photo-1586464367789-dc015a326df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="image-Gianyar" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">GIANYAR</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card>
                                <Card.Img src="https://images.unsplash.com/photo-1589255118865-8867b35f84b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="image-Klungkung" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">KLUNGKUNG</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card>
                                <Card.Img src="https://images.unsplash.com/photo-1628046827363-9545785c68fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image-Bangli" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">BANGLI</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card>
                                <Card.Img src="https://images.unsplash.com/photo-1575573330964-db3dad170190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image-Karangasem" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">KARANGASEM</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card>
                                <Card.Img src="https://images.unsplash.com/photo-1613691246379-e1ff602b49f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=522&q=80" alt="image-Singaraja" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">SINGARAJA</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col lg={3} className="kabupaten-col-parent-2-card">
                            <Card>
                                <Card.Img src="https://images.unsplash.com/photo-1593332918742-00df7074ca05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image-Singaraja" className="image-col-21"/>
                                <Card.ImgOverlay>
                                    <div className="kabupaten-card-text">
                                        <Row className="kabupaten-card-text-col-2-row">
                                            <Col className="kabupaten-card-text-col-2-row-col">
                                                <h1 className="kabupaten-card-text-col-2-row-col-h1">SINGARAJA</h1>
                                            </Col>
                                            <Col>
                                                <Button variant="warning" size="md"><b>Book Now</b></Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default Kabupaten;