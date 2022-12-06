import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/images/a1.jpg';
import { getCurrentUser } from '../../../service/userDataService';
import { getUserAnnoucements, getUserData } from '../../../service/userService';
import Rating from '../Rating/Rating';
import { Link, useParams } from 'react-router-dom';
import OneAnnounce from '../Annoucements/OneAnnounce';
import RatingCom from '../RatingCom/RatingCom';
import RatingForm from '../RatingCom/RatingForm';

export default function UserGuestProfile() {
  const params = useParams();
  const { _id } = params;

  const [user, setUser] = useState(getCurrentUser());
  const [annoucements, setAnnoucements] = useState();
  const [author1, setAuthor] = useState(getUserData(_id));
  const getAnn = async () => {
    
    const result = await getUserAnnoucements(_id);
    setAnnoucements(result.data);
  };

  useEffect(() => {
    getAnn();
  }, [user]);

  return (
    <div>
      <p>{_id}</p>

      <h1 className="my-3 ">Profil użytkownika {user.firstName}</h1>
      <Container className=" my-3 justify-content-center">
        <Row className="g-0">
          <Col md={4} className="profileLeftPanel">
            <Row>
              <img src={img} className="profilePhoto"></img>
            </Row>
            <Row className="my-3">
              <h2>{author1.firstName + ' ' + author1.lastName}</h2>
              <h5>{author1.email}</h5>
              <h5>{author1.telephone}</h5>
              <h5>
                <span>
                  <Rating rating={author1.rating} numReviews={author1.numReviews} />
                </span>
              </h5>
              
            </Row>
          </Col>

          <Col md={7} className="profileMiddlePanel">
            <h1>Opis użytkownika</h1>
            <h6>{author1.description}</h6>
          </Col>
          <Row>
            <Col>
              <h1 className="my-3">Ogłoszenia użytkownika</h1>
              {annoucements ? (
                annoucements.map((ann) => (
                  <Row key={ann.title} className="g-0">
                    <Col sm={12} md={12} lg={12} className="mb-1">
                      <OneAnnounce announce={ann}></OneAnnounce>
                    </Col>
                  </Row>
                ))
              ) : (
                <h2>Brak dostepnych informacji</h2>
              )}
            </Col>
          </Row>
          <Row>
            <h1 className="my-3">Opinie o użykowniku</h1>
            {annoucements ? (
              annoucements.map((ann) => (
                <Row key={ann.title} className="g-0">
                  <Col sm={12} md={12} lg={12} className="mb-1">
                    <RatingCom
                      rating={4}
                      firstName={'Mati'}
                      lastName={'Kowalski'}
                      comment={'To jest moja opinia o uzytkowniku'}
                    />
                  </Col>
                </Row>
              ))
            ) : (
              <h2>Brak dostepnych informacji</h2>
            )}
          </Row>
          <Row>
            <h1 className="my-3">Napisz opinie o użytkownika</h1>
            <RatingForm />
          </Row>
        </Row>
      </Container>
    </div>
  );
}
