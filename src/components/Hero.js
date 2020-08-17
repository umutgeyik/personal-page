import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import TextTrail from '../components/TextTrail';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-10">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                   
                    <Col md={10} sk={12}>
    {  <TextTrail/> }
                       
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;