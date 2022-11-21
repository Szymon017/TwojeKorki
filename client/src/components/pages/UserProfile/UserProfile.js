import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/images/a1.jpg';
import './style.css';
import { getCurrentUser } from '../../../service/userDataService';
import { getUserAnnoucements } from '../../../service/userService';

import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
import OneAnnInProf from './OneAnnInProf';

export default function UserProfile() {
  const [user, setUser] = useState(getCurrentUser());
  const [annoucements, setAnnoucements] = useState();

  const getAnn = async () => {
    const result = await getUserAnnoucements(user._id);
    setAnnoucements(result.data);
  };

  useEffect(() => {
    getAnn();
  }, [user]);

  return (
    <div>
      <h1 className="my-3 ">Profil użytkownika {user.firstName}</h1>
      <Container className=" my-3 justify-content-center">
        <Row className="g-0">
          {/* Leftbar*/}
          <Col md={4} className="profileLeftPanel">
            <Row>
              <img src={img} className="profilePhoto"></img>
            </Row>
            <Row className="my-3">
              <h2>{user.firstName + ' ' + user.lastName}</h2>
              <h5>{user.email}</h5>
              <h5>{user.telephone}</h5>
              <h5>
                <span>
                  <Rating rating={user.rating} numReviews={3} />
                </span>
              </h5>
              <Link to={`/userProfile/edit`}>
              <button className="btn btn-dark">Edytuj dane</button>
              </Link>
            </Row>
          </Col>
          {/* middle + rightbar*/}
          <Col md={7} className="profileMiddlePanel">
            <h1>Opis użytkownika</h1>
            <h6>{user.description}</h6>
          </Col>
          <Row>
            <Col>
          <h1>Moje ogłoszenia</h1>
          {annoucements ? (
            annoucements.map((ann) => (
              <Row key={ann.title} className="g-0">
                <Col  sm={12} md={12} lg={12} className="mb-1">
                  <OneAnnInProf announce={ann}></OneAnnInProf>
                </Col>
              </Row>
            ))
            ) : (
              <h2>Brak dostepnych informacji</h2>
              )}
              </Col>
        </Row>
        </Row>
      </Container>
    </div>
  );
}
