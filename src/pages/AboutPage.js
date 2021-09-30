import React from 'react';
import Hero from '../component/Hero';
import Content from '../component/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import oatman from '../assets/images/oatman_photo.jpg';

function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.title}/>

            <Content>

                <Row className="d-flex justify-content-center" >

                    <Col>
                        <div className="fs-2" md={6}>
                            <p><span>Experienced Leader and Group Facilitator with MBA interested in joining your team as an entry-level Web Developer. Successfully completed Ohio State University Full-Stack Developer Bootcamp. For-profit, not-for-profit, and higher-education work experience. Excellent communication and team skills.</span><br></br><br></br></p>
                            
                            <p className="d-flex justify-content-center">Detailed * Curious * Organized * Creative * Passionate</p><br></br>
                            
                            <p className="d-flex justify-content-center">JavaScript * HTML * CSS * JQuery * API * React.js * MySQL * Node.js</p>
                        </div>
                    </Col>

                    <Col md={3}>
                        <img src={oatman} height="400px" alt="Professional headshot of Raemarie Oatman" className="g-card-image"></img>
                    </Col>

                </Row>
            </Content>
        </div>
    );
    
}

export default AboutPage;
