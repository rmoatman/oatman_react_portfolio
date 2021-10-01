import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {
    
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 mt-5 pt-5">
            <Container fluid={true}>
                <Row className="py-5">
                    <Col>
                        { props.title && <h1 className="display-1 fw-bolder d-flex justify-content-center">{props.title}</h1> }
                        { props.subTitle && <h3 className="d-flex justify-content-center fw-bold fst-italic fs-1">{props.subTitle}</h3> }
                        { props.comment && <h3 className="d-flex justify-content-center fw-bold fs-4 p-3">{props.comment}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;