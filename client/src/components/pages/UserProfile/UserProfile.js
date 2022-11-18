import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/images/a1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile() {
 

  return (
    <div>
      <h1 className="my-3">Profil użytkownika</h1>
      <Container className=" my-5 justify-content-center">
        <Row>
          <Col md={4}>
            <Row>
              {' '}
              <img src={img}></img>
            </Row>
            <Row className="my-3">
              <Link to="/edit">
                <Button>Edytuj profil</Button>
              </Link>
            </Row>
          </Col>
          <Col md={8}>
            <Row>
              <h1>Imie nazwisko</h1>
            </Row>
            <Row>
              <h5>Email</h5>
            </Row>
            <Row>
              <h5>Nr tel</h5>
            </Row>

            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
