import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function getYear() {
    return new Date().getFullYear();
}

function Footer () {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between">
                    <Col>
                        © {getYear()} Tracy Wong
                    </Col>
                    <Col className="d-flex justify-content-end">
                        This site is made with love from Vancouver.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
