import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { login } from '../../../service/userService';
import './styles.css';

export default function Messages() {

    return <> 
         <Container className='messagesContainer'>
                <Row>
                    <Col className='pt-5 pb-5 center'>Wiadomości</Col>
                </Row>
            </Container>
    </>

}