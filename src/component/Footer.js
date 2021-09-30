import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(props) {
    
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top p-3 d-flex justify-content-center">
                    <Col className="p-0 d-flex justify-content-center" xs lg="2">
                    <a href="mailto:raemarie.oatman@gmail.com"><FontAwesomeIcon icon="envelope" size="6x"/></a>
                    </Col>
                    
                    <Col className="p-0 d-flex justify-content-center" xs lg="2">
                    <a href="https://github.com/rmoatman" target = "_blank"><FontAwesomeIcon icon={["fab", "github"]} size="6x"/></a>
                    </Col>

                    <Col className="p-0 d-flex justify-content-center" xs lg="2">
                    <a href="https://www.linkedin.com/in/raemarieoatman/" target = "_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="6x"/></a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;