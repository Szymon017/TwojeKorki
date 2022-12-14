import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Nav, Button } from 'react-bootstrap'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AllUsers from './AllUsers';
import BannedUsers from './BannedUsers';
import AllAnnoucements from './Reports';

export default function AdminPanel() {
    const options = {
        AllUsers: "AllUsers",
        BannedUsers: "BannedUsers",
        AllAnnoucements: "AllAnnoucements"
    }
    const [tab, setTab] = useState(options.AllUsers);


    const handleMenu = (option) => {
        setTab(option)
    }
    return (
        <>
            <Container className='adminPanelContainer'>
                <Row className="adminPanelLogo text-center">
                    <Col>Admin panel</Col>
                </Row>
                <Row className='adminPanelMenu'>
                    <Col>
                        <Button variant="dark" onClick={() => {handleMenu(options.AllUsers)}}>Wszyscy użytkownicy</Button> 
                    </Col>
                    <Col>
                        <Button variant="dark" onClick={() => {handleMenu(options.BannedUsers)}}>Zablokowani użytkownicy</Button> 
                    </Col>
                    <Col>
                        <Button variant="dark" onClick={() => {handleMenu(options.AllAnnoucements)}}>Zgłoszenia</Button> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {tab == options.AllUsers && (<AllUsers />)}
                        {tab == options.BannedUsers && (<BannedUsers />)}
                        {tab == options.AllAnnoucements && (<AllAnnoucements />)}
                    </Col>
                </Row>
            </Container>
        </>
    );
}