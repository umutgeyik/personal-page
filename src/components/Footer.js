import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AwesomeButtonSocial } from "react-awesome-button";

import "react-awesome-button/dist/styles.css";


function Footer(){
    return(
        <footer className="mt-5 footer">
            <Container fluid={true}>
                <Row className="border-top p-3">
                    <Col className="d-flex justify-content-center">
                    <AwesomeButtonSocial
        type="github"
        url="https://github.com/umutgeyik"/>

                    </Col>
                    <Col className="d-flex justify-content-center">
                    <AwesomeButtonSocial
        type="linkedin"
        url="https://tr.linkedin.com/in/umut-geyik-28065115a"/>

                    </Col>
                    <Col className="d-flex justify-content-center">
                    <AwesomeButtonSocial
        type="instagram"
        url="https://www.instagram.com/umut.geyik/"/>

                    </Col>
                </Row>
                <Row>
                <Col className="p-3 d-flex justify-content-center" >
                    <p>Umut Geyik @2020</p>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;