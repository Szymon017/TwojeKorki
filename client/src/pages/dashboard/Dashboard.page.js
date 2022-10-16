import React from "react";
import {Container, Row, Col, Button } from 'react-bootstrap';
import { AnnouncementTable} from "../../components/announcement-table/AnnouncementTable.comp";

export const Dashboard = () => {
    return (
        <Container>
           <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button 
                        variant="info" 
                        style={{"font-size":"2rem", padding: "10px 30px"}}
                    > 
                        Dodaj nowe ogłoszenie
                    </Button>
                </Col>
            </Row>  
            <Row>
                <Col className="text-center mb-2">
                    <div>Ilość wszystkich ogłoszeń: 50</div>
                </Col>
            </Row>   
            <Row>
                <Col className="recent-ticket">
                    <AnnouncementTable/>
                </Col>
            </Row> 

            <hr/>
        </Container>
    )
}