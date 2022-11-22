import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './../../../assets/images/a1.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function OneAnnInProf(props) {
  const { announce } = props;

  useEffect(()=>{
    console.log(announce);
  })
  return (
 
      <Row className="g-0 singleAnnouce">
        <Col md={2}>
          <Row className="g-0 ">
            <Col md={12} className="d-flex justify-content-center">
              <Link to={`/announcement/${announce.title}`}>
                <img
                  className="img-fluid rounded-start"
                  src={img}
                  alt={announce.option}
                ></img>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Card.Body>
            <Row className="g-0">
              <Col md={12}>
                <Card.Title>{announce.title}</Card.Title>
              </Col>
              <Col md={12}>
                <Card.Text>{announce.description}</Card.Text>
              </Col>
              <Col md={6} className=" fw-bold">
                <Card.Text>{announce.location} </Card.Text>
              </Col>
              <Col md={6} className="text-end fs-5 fw-bold ">
                {' '}
                <Card.Text> {announce.price} zł/godz</Card.Text>
              </Col>
              <Col className="text-end" >
                <Link to={`/announcement/${announce.title}`}>
                  <Button variant="warning">
                    Otwórz
                  </Button>
                </Link>
              
                {' '}
                <Link to={'/'}>
                  <Button variant="warning">
                    Edytuj <i class="bi bi-pencil"></i>
                  </Button>
                </Link>
              
                {' '}
                <Link to={`/sda`}>
                  <Button variant="warning">
                    Usuń <i class="bi bi-trash"></i>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
   
  );
}