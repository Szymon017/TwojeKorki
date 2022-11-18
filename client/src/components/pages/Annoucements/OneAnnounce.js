import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import img from './../../../assets/images/a1.jpg';
import { Link } from 'react-router-dom';

export default function OneAnnounce(props) {
  const { product } = props;
  return (
    <Card style={{ background: 'rgb(245, 225, 203)' }} >
      <Row className="g-0">
        <Col md={2}>
          <Row className="g-0">
            <Col md={12} className="d-flex justify-content-center">
              <Link to={`/announcement/${product.title}`}>
                <img
                  className="img-fluid rounded-start"
                  src={img}
                  alt={product.option}
                ></img>
              </Link>
            </Col>
            <Col md={12} className="d-flex justify-content-center">
              {product.userID}
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Card.Body>
            <Row className="g-0">
              <Col md={12}>
                <Card.Title>{product.title}</Card.Title>
              </Col>
              <Col md={12}>
                <Card.Text>{product.description}</Card.Text>
              </Col>
              <Col md={6} className=" fw-bold">
                <Card.Text>{product.location} </Card.Text>
              </Col>
              <Col md={6} className="text-end fs-5 fw-bold ">
                {' '}
                <Card.Text> {product.price} zł/godz</Card.Text>
              </Col>
              <Link to={`/announcement/${product.title}`}>
                <Button variant="warning">Wejdz do ogloszenia</Button>
              </Link>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
