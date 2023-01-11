import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { getCurrentUser } from "./service/userDataService";

export default function Banned() {
    const [user, setUser] = useState(getCurrentUser());

        return (
            <>
            <Container>
                <Row>
                    <Col>
                        <h1>Twoje konto zostało zablokowane.</h1>
                        <p>Powód blokady: {user?.status.cause}</p>
                    </Col>
                </Row>
            </Container>
            </>
        );
            
    
}