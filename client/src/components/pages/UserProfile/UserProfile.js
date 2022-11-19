import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/images/a1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import './style.css';

export default function UserProfile() {
  
  const [user, setUser] = useState({});

  useEffect(() => {
    const decoded = jwt_decode(localStorage.getItem("token"));
    console.log(decoded); 
    setUser(decoded.id)
  },[])

  return (
    <div>
      <h1 className="my-3">Profil użytkownika {user.firstName}</h1>
      <Container className=" my-5 justify-content-center">
        <Row>
          {/* Leftbar*/}
          <Col md={4} className='profileLeftPanel'>
            <Row>
              <img src={img} className='profilePhoto'></img>
            </Row>
            <Row className="my-3">
                <h2>{user.firstName+" "+user.lastName}</h2>
                <h5>{user.email}</h5>
                <h5>{user.telephone}</h5>
                <button>Edytuj dane</button>
            </Row>
          </Col>
          {/* middle + rightbar*/}
          <Col md={7} className='profileMiddlePanel'>
            <Row>
              <h2>Uzytkownik nie zamieścił o sobie zadnych informacji</h2>
            </Row>

            <Row>
              
            </Row>

            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
