import React from "react";
import {Navbar, Nav}from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        <Navbar
        collapseOnSelect
        bg="info"
        variant="dark"
        expand="md"
        >
            <Navbar.Brand>
               <img href="" src={logo} alt="logo" width="50px" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/messages">Wiadomości</Nav.Link>
                    <Nav.Link href="/favorite">Ulubione</Nav.Link>
                    <Nav.Link href="/myAccount">Moje Konto</Nav.Link>
                    <Nav.Link href="/logout">Wyloguj</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}