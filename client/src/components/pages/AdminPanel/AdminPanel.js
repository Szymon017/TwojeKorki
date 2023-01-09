import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Nav, Button } from 'react-bootstrap'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AllUsers from './AllUsers';
import BannedUsers from './BannedUsers';
import Reports from './Reports';
import { getCurrentUser } from '../../../service/userDataService';

export default function AdminPanel() {
    const options = {
        AllUsers: "AllUsers",
        BannedUsers: "BannedUsers",
        Reports: "Reports"
    }
    const [tab, setTab] = useState(options.AllUsers);
    const [user, setUser] = useState(getCurrentUser());


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
                    {user?.role=="admin" && 
                    <Col>
                        <Button variant="dark" onClick={() => {handleMenu(options.AllUsers)}}>Wszyscy użytkownicy</Button> 
                    </Col> 
                    }
                    {user?.role=="admin" &&
                    <Col>
                        <Button variant="dark" onClick={() => {handleMenu(options.BannedUsers)}}>Zablokowani użytkownicy</Button> 
                    </Col>
                    }
                    <Col>
                        <Button variant="dark" onClick={() => {handleMenu(options.Reports)}}>Zgłoszenia</Button> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {tab == options.AllUsers && user?.role==="admin" && (<AllUsers />)}
                        {tab == options.BannedUsers && user?.role==="admin" && (<BannedUsers />)}
                        {tab == options.Reports && (<Reports />)}
                    </Col>
                </Row>
            </Container>
        </>
    );
}